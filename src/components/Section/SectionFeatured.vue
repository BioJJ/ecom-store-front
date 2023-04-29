<template>
	<section class="app-section">
		<div class="wrapper">
			<div class="flex items-center justify-between gap-2">
				<h2>Featured Products</h2>
				<SwiperButtons name="featured" />
			</div>
			<!-- <ClientOnly>
				<Swiper class="intro-swiper" v-if="!isLoading" :swiper-options="swiperOptions">
					<SwiperSlide class="intro-slide" v-for="product in featured" :key="product.id">
						<ProductCard :product="product" />
					</SwiperSlide>
				</Swiper>

				<SwiperSkeleton v-else :swiper-options="swiperOptions">
					<ProductSkeleton />
				</SwiperSkeleton>

				<template #fallback>
					<ProductSkeleton />
				</template>
			</ClientOnly> -->

			<div v-if="!isLoading" class="products-grid">
				<ProductCard
					v-for="product in featured"
					:key="product.id"
					:product="product"
				/>
			</div>
			<div v-else class="products-grid">
				<ProductSkeleton />
			</div>
		</div>
	</section>
</template>

<script setup>
// Swiper
import { SwiperSlide } from 'swiper/vue'
const swiperOptions = {
	pagination: false,
	navigation: {
		prevEl: '.featured-swiper-prev',
		nextEl: '.featured-swiper-next'
	},
	breakpoints: {
		480: {
			slidesPerView: 2
		},
		640: {
			slidesPerView: 3
		},
		1024: {
			slidesPerView: 4
		},
		1280: {
			slidesPerView: 5
		}
	}
}

// Strapi
const isLoading = ref(true)
const featured = reactive({})
const getFeatured = async () => {
	isLoading.value = true
	const data = await $fetch('http://localhost:3000/products', {
		method: 'GET'
	})
	Object.assign(featured, data)
	isLoading.value = false
}
onMounted(() => {
	getFeatured()
})
</script>

<style scoped lang="scss">
.wrapper {
	@apply container flex flex-col gap-4;
}
.products-grid {
	@apply grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5;

	@media (min-width: 480px) and (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}
.intro-swiper {
	--swiper-theme-color: #237d64;
	--swiper-navigation-size: 10px;

	.intro-slide {
		@apply bg-cover bg-no-repeat py-1 px-1;
		@apply flex h-auto flex-col items-center justify-center gap-1 text-center;
		@apply lg:items-start lg:text-start;

		> * {
			@apply lg:max-w-3xl;
		}

		> p {
			@apply font-medium;
		}
	}

	.swiper-button-next,
	.swiper-button-prev {
		@apply flex items-center justify-center rounded-full p-5 transition-colors;
		@apply bg-gray-100 text-gray-200 hover:bg-green-200 hover:text-white;
	}
}
</style>
