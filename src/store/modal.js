import create from 'zustand'

const useModalStore = create((set) => ({
	isModalOpen: false,
	showModal: () => set({ isModalOpen: true }),
	closeModal: () => set({ isModalOpen: false }),
}));

export default useModalStore;