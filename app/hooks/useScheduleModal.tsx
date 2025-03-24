import { create } from "zustand";

interface ScheduleStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useScheduleModal = create<ScheduleStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useScheduleModal;
