import create from 'zustand';

interface Store {
  user: string | null;
  setUser: (user: string) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
