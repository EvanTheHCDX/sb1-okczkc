import React, { useState, useEffect, useRef } from 'react';
import { Search } from 'lucide-react';
import SearchResults from './SearchResults';
import { Sport, Player, Team } from '../types/search';
import { NCAA_SPORTS, MOCK_PLAYERS, MOCK_TEAMS } from '../data/searchData';

interface SearchBarProps {
  onSportSelect?: (sport: string) => void;
}

export default function SearchBar({ onSportSelect }: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredSports = NCAA_SPORTS.filter(sport =>
    `${sport.name} ${sport.gender}`.toLowerCase().includes(query.toLowerCase())
  );

  const filteredPlayers = MOCK_PLAYERS.filter(player =>
    `${player.name} ${player.team}`.toLowerCase().includes(query.toLowerCase())
  );

  const filteredTeams = MOCK_TEAMS.filter(team =>
    `${team.name} ${team.sport}`.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSportSelect = (sport: Sport) => {
    if (onSportSelect) {
      onSportSelect(`${sport.name} ${sport.gender}`);
    }
    setShowResults(false);
    setQuery('');
  };

  return (
    <div ref={searchRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          placeholder="Search for players, teams, or sports..."
          className="w-full p-4 pl-12 pr-4 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      </div>

      {showResults && query.length > 0 && (
        <SearchResults
          players={filteredPlayers}
          teams={filteredTeams}
          sports={filteredSports}
          onSelect={() => setShowResults(false)}
          onSportSelect={handleSportSelect}
        />
      )}
    </div>
  );
}