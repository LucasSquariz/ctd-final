import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CardStoreProps } from './types';

export const useCardStore = create(
  persist<CardStoreProps>(
    set => ({
      ammount: '',
      setAmmount: (value: string) => set(() => ({ ammount: value })),
      dated: '',
      setDated: (date: string) => set(() => ({ dated: date })),
      destination: '',
      setDestination: (dest: string) => set(() => ({ destination: dest })),
      origin: '',
      setOrigin: (orig: string) => set(() => ({ origin: orig }))
    }),
    {
      name: 'CardStore'
    }
  )
);
