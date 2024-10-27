import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Heart } from 'lucide-react';
import { useTeamsStore } from '../stores/teamsStore';

interface TeamCardProps {
  id: string;
  name: string;
  league?: string;
  conference?: string;
  location?: string;
  mascot?: string;
  colors?: string[];
  imageUrl: string;
}

export default function TeamCard({ 
  id, 
  name, 
  league, 
  conference, 
  location,
  mascot,
  colors = [],
  imageUrl 
}: TeamCardProps) {
  const { isFavorite, addFavoriteTeam, removeFavoriteTeam } = useTeamsStore();
  const isTeamFavorite = isFavorite(id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isTeamFavorite) {
      removeFavoriteTeam(id);
    } else {
      addFavoriteTeam(id);
    }
  };

  return (
    <Link to={`/team/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={handleFavoriteClick}
            className={`absolute top-4 right-4 p-2 rounded-full ${
              isTeamFavorite 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-600'
            } hover:scale-110 transition-transform`}
          >
            <Heart 
              className={`w-5 h-5 ${isTeamFavorite ? 'fill-current' : ''}`} 
            />
          </button>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">
            {conference || league || 'Independent'}
            {location && ` • ${location}`}
          </p>
          
          {colors.length > 0 && (
            <div className="flex gap-2 mb-3">
              {colors.map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                  title={color}
                />
              ))}
            </div>
          )}
          
          <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <Users className="w-4 h-4" />
            <span>View Team</span>
          </button>
        </div>
      </div>
    </Link>
  );
}