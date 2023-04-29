import { defineStore, acceptHMRUpdate } from 'pinia'

export const useCategoryStore = defineStore('category', {
	state: () => ({
		categories: {}
	}),

	actions: {
		async fetchCategories(): Promise<void> {
			const data = await $fetch('http://localhost:3000/categories', {
				method: 'GET'
			})
			if (data != null) {
				this.categories = data
			}
		}
	},

	getters: {
		categoriesList: (state) => state.categories
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useCategoryStore, import.meta.hot))
}
