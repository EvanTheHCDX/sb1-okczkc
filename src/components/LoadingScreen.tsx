import React from 'react';
import { Trophy } from 'lucide-react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-blue-600 flex items-center justify-center">
      <div className="text-center">
        <Trophy className="w-16 h-16 text-white animate-bounce mb-4" />
        <div className="text-white text-2xl font-bold">SportsTip</div>
        <div className="text-blue-200 mt-2">Loading amazing experiences...</div>
      </div>
    </div>
  );
}