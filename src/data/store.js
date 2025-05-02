import { create } from 'zustand'

const useRecipeStore = create((set) => ({
	recipes: [],

	setRecipes: rs => set(state => ({
		recipes: rs
	}))

	// bears: 0,
	// increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
	// removeAllBears: () => set({ bears: 0 }),
}))

export { useRecipeStore }
