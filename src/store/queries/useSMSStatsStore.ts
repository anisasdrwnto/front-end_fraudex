import { create } from 'zustand';

interface SMSStatsState {
  normalCount: number;
  suspiciousCount: number;
  fraudCount: number;
  incrementStats: (resultType: 'normal' | 'waspada' | 'penipuan') => void;
  resetStats: () => void;
}

export const useSMSStatsStore = create<SMSStatsState>((set) => ({
  normalCount: 0,
  suspiciousCount: 0,
  fraudCount: 0,
  incrementStats: (resultType) =>
    set((state) => {
      if (resultType === 'normal') return { normalCount: state.normalCount + 1 };
      if (resultType === 'waspada') return { suspiciousCount: state.suspiciousCount + 1 };
      if (resultType === 'penipuan') return { fraudCount: state.fraudCount + 1 };
      return state;
    }),
  resetStats: () => set({ normalCount: 0, suspiciousCount: 0, fraudCount: 0 }),
}));