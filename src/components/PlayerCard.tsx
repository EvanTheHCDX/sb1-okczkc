import React from 'react';
import { Link } from 'react-router-dom';
import { User, DollarSign, Award } from 'lucide-react';
import { Player } from '../types/search';

interface PlayerCardProps extends Player {
  stats?: {
    [key: string]: string | number;
  };
}

export default function PlayerCard({ id, name, team, position, imageUrl, stats }: PlayerCardProps) {
  return (
    <Link to={`/player/${id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="h-48 overflow-hidden relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
          />
          {position === "Quarterback" && (
            <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center">
              <Award className="w-4 h-4 mr-1" />
              Team Captain
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{position} • {team}</p>
          
          {stats && (
            <div className="grid grid-cols-3 gap-2 mb-3 bg-gray-50 p-2 rounded-lg">
              {Object.entries(stats).slice(0, 3).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className="text-xs text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div className="font-semibold">{value}</div>
                </div>
              ))}
            </div>
          )}
          
          <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
            <DollarSign className="w-4 h-4" />
            <span>Send Tip</span>
          </button>
        </div>
      </div>
    </Link>
  );
}