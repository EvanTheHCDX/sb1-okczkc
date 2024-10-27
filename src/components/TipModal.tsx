import React, { useState } from 'react';
import { X, DollarSign, Camera, MessageSquare } from 'lucide-react';
import { useTipsStore } from '../stores/tipsStore';
import Toast from './Toast';

interface TipModalProps {
  playerId: string;
  playerName: string;
  playerTeam: string;
  playerSport: string;
  onClose: () => void;
}

export default function TipModal({ 
  playerId, 
  playerName, 
  playerTeam,
  playerSport,
  onClose 
}: TipModalProps) {
  const [amount, setAmount] = useState('20');
  const [message, setMessage] = useState('Great game! Keep it up!');
  const [media, setMedia] = useState<File | null>(null);
  const [showToast, setShowToast] = useState(false);
  const addTip = useTipsStore((state) => state.addTip);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: Implement Stripe payment processing
    
    // Add tip to history
    addTip({
      playerId,
      playerName,
      playerTeam,
      playerSport,
      amount: Number(amount),
      message,
      mediaUrl: media ? URL.createObjectURL(media) : undefined,
    });
    
    setShowToast(true);
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  const presetAmounts = [5, 10, 20, 50, 100];

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-40">
        <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Send Tip to {playerName}</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Select Amount
              </label>
              <div className="grid grid-cols-5 gap-2 mb-2">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setAmount(preset.toString())}
                    className={`p-2 rounded-lg border ${
                      amount === preset.toString()
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-200 hover:border-blue-500'
                    }`}
                  >
                    ${preset}
                  </button>
                ))}
              </div>
              <input
                type="number"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
                placeholder="Add a message..."
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Add Media (optional)
              </label>
              <input
                type="file"
                accept="image/*,video/*"
                onChange={(e) => setMedia(e.files?.[0] || null)}
                className="hidden"
                id="media-upload"
              />
              <label
                htmlFor="media-upload"
                className="flex items-center justify-center space-x-2 p-3 border-2 border-dashed rounded-lg cursor-pointer hover:border-blue-500"
              >
                <Camera className="w-5 h-5 text-gray-500" />
                <span className="text-gray-500">Upload photo or video</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <DollarSign className="w-5 h-5" />
              <span>Send ${amount} Tip</span>
            </button>
          </form>
        </div>
      </div>

      {showToast && (
        <Toast
          message={`Successfully sent $${amount} tip to ${playerName}!`}
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
}