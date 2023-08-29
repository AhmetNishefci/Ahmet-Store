import { create } from 'zustand';

import { ProductType } from '@/types';

type PreviewModalStore = {
  isOpen: boolean;
  data?: ProductType;
  onOpen: (data: ProductType) => void;
  onClose: () => void;
}

export const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: ProductType) => set({ isOpen: true, data }),
  onClose: () => set({ isOpen: false }),
}));
