import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';
import TeamCard from '../components/TeamCard';
import SearchBar from '../components/SearchBar';
import NewsSection from '../components/NewsSection';
import { Trophy, Heart } from 'lucide-react';
import { NOTRE_DAME_PLAYERS } from '../data/notreDataFootball';
import { BIG_12_TEAMS } from '../data/conferencesData';
import { WOMENS_BASKETBALL_NEWS } from '../data/newsData';
import { useTeamsStore } from '../stores/teamsStore';

export default function Home() {
  const [selectedSport, setSelectedSport] = useState<string | null>(null);
  const favoriteTeams = useTeamsStore((state) => state.favoriteTeams);

  const handleSportSelect = (sport: string) => {
    setSelectedSport(sport.toLowerCase());
  };

  const favTeams = BIG_12_TEAMS.filter(team => favoriteTeams.includes(team.id));

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Your Favorite Athletes</h1>
        <p className="text-gray-600">Send tips to players for their outstanding performances</p>
      </div>

      <SearchBar onSportSelect={handleSportSelect} />
      
      {favTeams.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold flex items-center">
              <Heart className="w-6 h-6 mr-2 text-red-500" />
              Favorite Teams
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {favTeams.map(team => (
              <TeamCard key={team.id} {...team} />
            ))}
          </div>
        </section>
      )}

      {selectedSport === "women's basketball" && (
        <NewsSection 
          sport="Women's Basketball"
          news={WOMENS_BASKETBALL_NEWS}
        />
      )}

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Featured Players</h2>
          <div className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm">Notre Dame</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTRE_DAME_PLAYERS.map(player => (
            <PlayerCard key={player.id} {...player} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Top Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BIG_12_TEAMS.map(team => (
            <TeamCard
              key={team.id}
              id={team.id}
              name={team.name}
              conference={team.conference}
              location={team.location}
              mascot={team.mascot}
              colors={team.colors}
              imageUrl={team.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
}