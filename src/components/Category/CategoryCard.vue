<script setup>
const props = defineProps({
	category: {
		type: Object,
		required: false,
		default: () => {}
	}
})
</script>

<template>
	<NuxtLink :to="`/categories/${props.category._id}`" class="category-card">
		<img
			:src="props.category?.image"
			:alt="props.category.name"
			class="category-img"
		/>
		<p class="app-text-lg text-center">{{ props.category.name }}</p>

		<span class="text-sm text-gray-200">
			<!--todo: verificar retorno dos produtos na categoria -->
			<!-- {{ props.category.attributes.Products.data.length }} -->
			{{ props.category.length }}
			<!-- {{
				`${
					props.category.attributes.Products.data.length > 1 ? 'Items' : 'Item'
				}`
			}} -->

			{{ `${props.category.length > 1 ? 'Items' : 'Item'}` }}
		</span>
	</NuxtLink>
</template>

<style scoped lang="scss">
.category-card {
	@apply rounded-lg border border-gray-100 transition-colors hover:border-green-200;
	@apply px-6 py-4;
	@apply flex h-full flex-col items-center justify-center gap-2;
}

.category-img {
	@apply mx-auto h-[96px] w-[96px] rounded-full;
}
</style>
