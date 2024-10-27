import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import PlayerCard from '../components/PlayerCard';
import { BIG_12_TEAMS, ConferenceTeam } from '../data/conferencesData';
import { NOTRE_DAME_PLAYERS } from '../data/notreDataFootball';
import { Filter } from 'lucide-react';

export default function TeamProfile() {
  const { id } = useParams<{ id: string }>();
  const [selectedPosition, setSelectedPosition] = useState<string>('');

  const team = BIG_12_TEAMS.find(t => t.id === id) || {
    id: 'nd-1',
    name: 'Notre Dame Fighting Irish',
    sport: 'Football',
    mascot: 'Fighting Irish',
    location: 'Notre Dame, Indiana',
    conference: 'Independent',
    colors: ['navy', 'gold'],
    imageUrl: 'https://images.unsplash.com/photo-1522778534827-2c88a60f3bd3?auto=format&fit=crop&q=80'
  } as ConferenceTeam;

  const teamPlayers = id?.startsWith('nd-') ? NOTRE_DAME_PLAYERS : [];
  
  // Get unique positions for filter
  const positions = [...new Set(teamPlayers.map(player => player.position))];
  
  // Filter players by position if selected
  const filteredPlayers = selectedPosition
    ? teamPlayers.filter(player => player.position === selectedPosition)
    : teamPlayers;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="h-64 relative">
          <img
            src={team.imageUrl}
            alt={team.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{team.name}</h1>
            <p className="text-white/90">{team.location} • {team.conference}</p>
          </div>
        </div>
        <div className="p-6">
          <div className="flex gap-2 mb-4">
            {team.colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
                title={color}
              />
            ))}
          </div>
        </div>
      </div>

      {teamPlayers.length > 0 && (
        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Team Players</h2>
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-500" />
              <select
                value={selectedPosition}
                onChange={(e) => setSelectedPosition(e.target.value)}
                className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="">All Positions</option>
                {positions.map(position => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPlayers.map((player) => (
              <PlayerCard
                key={player.id}
                {...player}
              />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}