import create from 'zustand';
import { persist } from 'zustand/middleware';

interface TeamsState {
  favoriteTeams: string[];
  addFavoriteTeam: (teamId: string) => void;
  removeFavoriteTeam: (teamId: string) => void;
  isFavorite: (teamId: string) => boolean;
}

export const useTeamsStore = create<TeamsState>()(
  persist(
    (set, get) => ({
      favoriteTeams: [],
      addFavoriteTeam: (teamId) =>
        set((state) => ({
          favoriteTeams: [...state.favoriteTeams, teamId],
        })),
      removeFavoriteTeam: (teamId) =>
        set((state) => ({
          favoriteTeams: state.favoriteTeams.filter((id) => id !== teamId),
        })),
      isFavorite: (teamId) => get().favoriteTeams.includes(teamId),
    }),
    {
      name: 'teams-storage',
    }
  )
);