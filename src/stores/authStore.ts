import create from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'fan' | 'player' | 'coach' | 'admin';
  phone?: string;
  location?: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      login: async (email, password) => {
        // Get the stored user data if it exists
        const storedUser = localStorage.getItem('registeredUser');
        if (storedUser) {
          const userData = JSON.parse(storedUser);
          set({ isAuthenticated: true, user: userData });
        } else {
          // Fallback for users who haven't registered
          set({ 
            isAuthenticated: true, 
            user: {
              id: '1',
              name: 'Guest User',
              email,
              role: 'fan',
              phone: '',
              location: ''
            }
          });
        }
      },
      register: async (name, email, password) => {
        const userData = {
          id: Date.now().toString(),
          name,
          email,
          role: 'fan' as const,
          phone: '',
          location: ''
        };
        
        localStorage.setItem('registeredUser', JSON.stringify(userData));
        
        set({
          isAuthenticated: true,
          user: userData
        });
      },
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
      updateUser: async (userData) => {
        set((state) => {
          const updatedUser = state.user ? { ...state.user, ...userData } : null;
          if (updatedUser) {
            localStorage.setItem('registeredUser', JSON.stringify(updatedUser));
          }
          return { user: updatedUser };
        });
      }
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage
    }
  )
);