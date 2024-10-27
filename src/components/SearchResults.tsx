import React from 'react';
import { User, Trophy, Activity } from 'lucide-react';
import { Sport, Player, Team } from '../types/search';
import { useNavigate } from 'react-router-dom';
import { BIG_12_TEAMS, ConferenceTeam } from '../data/conferencesData';

interface SearchResultsProps {
  players: Player[];
  teams: Team[];
  sports: Sport[];
  onSelect: () => void;
  onSportSelect?: (sport: Sport) => void;
}

export default function SearchResults({ players, teams, sports, onSelect, onSportSelect }: SearchResultsProps) {
  const navigate = useNavigate();

  const getTeamsForSport = (sportName: string): ConferenceTeam[] => {
    return BIG_12_TEAMS.map(team => ({
      ...team,
      sport: sportName
    }));
  };

  return (
    <div className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-lg border max-h-96 overflow-y-auto">
      {players.length > 0 && (
        <div className="p-2">
          <h3 className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Players</h3>
          {players.map(player => (
            <div
              key={player.id}
              onClick={() => {
                navigate(`/player/${player.id}`);
                onSelect();
              }}
              className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <User className="w-4 h-4 text-gray-400 mr-3" />
              <div>
                <div className="font-medium">{player.name}</div>
                <div className="text-sm text-gray-500">{player.team} • {player.sport}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {sports.length > 0 && (
        <div className="p-2 border-t">
          <h3 className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Sports</h3>
          {sports.map((sport, index) => (
            <div key={index}>
              <div
                onClick={() => {
                  if (onSportSelect) {
                    onSportSelect(sport);
                  }
                  onSelect();
                }}
                className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
              >
                <Activity className="w-4 h-4 text-gray-400 mr-3" />
                <div>
                  <div className="font-medium">{sport.name}</div>
                  <div className="text-sm text-gray-500">{sport.gender} • {sport.season}</div>
                </div>
              </div>
              <div className="ml-10 border-l-2 border-gray-100">
                {getTeamsForSport(sport.name).map(team => (
                  <div
                    key={team.id}
                    onClick={() => {
                      navigate(`/team/${team.id}`);
                      onSelect();
                    }}
                    className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <Trophy className="w-4 h-4 text-gray-400 mr-3" />
                    <div>
                      <div className="font-medium">{team.name}</div>
                      <div className="text-sm text-gray-500">Big 12 Conference</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {teams.length > 0 && !sports.length && (
        <div className="p-2 border-t">
          <h3 className="text-xs font-semibold text-gray-500 uppercase px-3 py-2">Teams</h3>
          {teams.map(team => (
            <div
              key={team.id}
              onClick={() => {
                navigate(`/team/${team.id}`);
                onSelect();
              }}
              className="flex items-center px-3 py-2 hover:bg-gray-50 rounded-lg cursor-pointer"
            >
              <Trophy className="w-4 h-4 text-gray-400 mr-3" />
              <div>
                <div className="font-medium">{team.name}</div>
                <div className="text-sm text-gray-500">{team.sport}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}