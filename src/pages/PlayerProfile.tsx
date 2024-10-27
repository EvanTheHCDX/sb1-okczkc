import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DollarSign, MessageSquare, Award, Trophy, Star } from 'lucide-react';
import TipModal from '../components/TipModal';
import { NOTRE_DAME_PLAYERS } from '../data/notreDataFootball';

export default function PlayerProfile() {
  const { id } = useParams<{ id: string }>();
  const [showTipModal, setShowTipModal] = useState(false);

  const player = NOTRE_DAME_PLAYERS.find(p => p.id === id) || NOTRE_DAME_PLAYERS[0];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="h-64 relative">
          <img
            src={player.imageUrl}
            alt={player.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-full flex items-center">
            <Award className="w-5 h-5 mr-2" />
            <span>{player.position}</span>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <h1 className="text-3xl font-bold text-white">{player.name}</h1>
            <p className="text-white/90">{player.position} • {player.team}</p>
          </div>
        </div>

        <div className="p-6">
          <div className="flex space-x-4 mb-8">
            <button
              onClick={() => setShowTipModal(true)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <DollarSign className="w-5 h-5" />
              <span>Send Tip</span>
            </button>
            <button className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2">
              <MessageSquare className="w-5 h-5" />
              <span>Message</span>
            </button>
          </div>

          {player.stats && (
            <div className="grid grid-cols-4 gap-4 text-center mb-8">
              {Object.entries(player.stats).map(([key, value]) => (
                <div key={key} className="bg-gray-50 p-4 rounded-lg">
                  <div className="text-xl font-bold text-blue-600">{value}</div>
                  <div className="text-sm text-gray-600">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-bold text-lg mb-3 flex items-center">
              <Trophy className="w-5 h-5 mr-2 text-blue-600" />
              Season Highlights
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-blue-600" />
                <span>Starting {player.position} for Notre Dame Fighting Irish</span>
              </li>
              <li className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-blue-600" />
                <span>Team Captain</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {showTipModal && (
        <TipModal
          playerId={id!}
          playerName={player.name}
          playerTeam={player.team}
          playerSport={player.sport}
          onClose={() => setShowTipModal(false)}
        />
      )}
    </div>
  );
}