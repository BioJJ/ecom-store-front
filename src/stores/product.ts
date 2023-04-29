import { defineStore, acceptHMRUpdate } from 'pinia'

export const useProductStore = defineStore('product', {
	state: () => ({
		product: {}
	}),

	actions: {
		async fetchProducts(): Promise<void> {
			const data = await $fetch('http://localhost:3000/products', {
				method: 'GET'
			})
			if (data != null) {
				this.product = data
			}
		}
	},

	getters: {
		getProducts: (state) => state.product
	}
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot))
}
