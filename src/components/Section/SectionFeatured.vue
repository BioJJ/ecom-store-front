<template>
	<section class="app-section">
		<div class="wrapper">
			<div class="flex items-center justify-between gap-2">
				<h2>Featured Products</h2>
				<SwiperButtons name="featured" />
			</div>
			<ClientOnly>
				<Swiper v-if="!isLoading" :swiper-options="swiperOptions">
					<SwiperSlide v-for="product in featured" :key="product.id">
						<ProductCard :product="product" />
					</SwiperSlide>
				</Swiper>

				<SwiperSkeleton v-else :swiper-options="swiperOptions">
					<ProductSkeleton />
				</SwiperSkeleton>

				<template #fallback>
					<ProductSkeleton />
				</template>
			</ClientOnly>
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
const featured = reactive({
	attributes: {
		Name: 'Automatic Powder Lavender Scent Multicolour - 2.5 Kg',
		createdAt: '2022-07-29T18:04:57.710Z',
		updatedAt: '2022-08-01T19:27:14.529Z',
		publishedAt: '2022-07-29T18:04:58.724Z',
		Brand: 'Tide',
		Price_Current: 80,
		Price_Original: 96,
		Price_Currency: 'EGP',
		Rating_Value: 4.8,
		Rating_Users: 762,
		isFeatured: false,
		isBestDeal: true,
		isDailyBestSell: false,
		Image: {
			data: [
				{
					id: 118,
					attributes: {
						name: 'N52757572_A_4_45e32a2edf.webp',
						alternativeText: 'N52757572_A_4_45e32a2edf.webp',
						caption: 'N52757572_A_4_45e32a2edf.webp',
						width: 400,
						height: 546,
						formats: {
							small: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117789/Groceyish/Strapi/small_N52757572_A_4_45e32a2edf_dab3664874.webp',
								hash: 'small_N52757572_A_4_45e32a2edf_dab3664874',
								mime: 'image/webp',
								name: 'small_N52757572_A_4_45e32a2edf.webp',
								path: null,
								size: 19.41,
								width: 366,
								height: 500,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/small_N52757572_A_4_45e32a2edf_dab3664874',
									resource_type: 'image'
								}
							},
							thumbnail: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117788/Groceyish/Strapi/thumbnail_N52757572_A_4_45e32a2edf_dab3664874.webp',
								hash: 'thumbnail_N52757572_A_4_45e32a2edf_dab3664874',
								mime: 'image/webp',
								name: 'thumbnail_N52757572_A_4_45e32a2edf.webp',
								path: null,
								size: 3.96,
								width: 114,
								height: 156,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/thumbnail_N52757572_A_4_45e32a2edf_dab3664874',
									resource_type: 'image'
								}
							}
						},
						hash: 'N52757572_A_4_45e32a2edf_dab3664874',
						ext: '.webp',
						mime: 'image/webp',
						size: 24.95,
						url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117788/Groceyish/Strapi/N52757572_A_4_45e32a2edf_dab3664874.webp',
						previewUrl: null,
						provider: 'cloudinary',
						provider_metadata: {
							public_id: 'Groceyish/Strapi/N52757572_A_4_45e32a2edf_dab3664874',
							resource_type: 'image'
						},
						createdAt: '2022-07-29T18:03:09.736Z',
						updatedAt: '2022-07-29T18:03:09.736Z'
					}
				}
			]
		},
		Category: {
			data: {
				id: 9,
				attributes: {
					Name: 'Laundry',
					createdAt: '2022-07-29T17:48:52.650Z',
					updatedAt: '2022-07-29T17:48:53.392Z',
					publishedAt: '2022-07-29T17:48:53.389Z'
				}
			}
		}
	}
})
const getFeatured = async () => {
	isLoading.value = true
	const data = null
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
</style>
