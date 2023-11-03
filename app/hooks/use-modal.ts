import { create } from "zustand";
import { ModalType } from "../models/modal";

interface ModalStore {
  modal: ModalType | null;
  onOpen: (modal: ModalType) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  modal: null,
  onOpen: (modal) => set({ modal }),
  onClose: () => set({ modal: null }),
}));
