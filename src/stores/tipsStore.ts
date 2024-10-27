import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface Tip {
  id: string;
  playerId: string;
  playerName: string;
  playerTeam: string;
  playerSport: string;
  amount: number;
  message: string;
  timestamp: number;
  mediaUrl?: string;
}

interface TipsState {
  tips: Tip[];
  addTip: (tip: Omit<Tip, 'id' | 'timestamp'>) => void;
}

export const useTipsStore = create<TipsState>()(
  persist(
    (set) => ({
      tips: [],
      addTip: (tip) =>
        set((state) => ({
          tips: [
            {
              ...tip,
              id: `tip-${Date.now()}`,
              timestamp: Date.now(),
            },
            ...state.tips,
          ],
        })),
    }),
    {
      name: 'tips-storage',
    }
  )
);