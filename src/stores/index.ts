import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'
export default defineComponent({
	setup() {
		const car = useCartStore()
		// extract specific store properties
		const { products } = storeToRefs(car)
		return {
			// gives access to the whole store in the template
			car,
			// gives access only to specific state or getter
			products
		}
	}
})
