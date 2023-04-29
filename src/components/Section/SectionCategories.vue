<template>
	<section class="app-section wrapper">
		<div class="flex items-center justify-between gap-2">
			<h2>Explore Categories</h2>
			<SwiperButtons name="category" />
		</div>

		<ClientOnly>
			<Swiper v-if="!isLoading" :swiper-options="swiperOptions">
				<SwiperSlide v-for="category in categories" :key="category.id">
					<CategoryCard :category="category" />
				</SwiperSlide>
			</Swiper>

			<SwiperSkeleton v-else :swiper-options="swiperOptions">
				<CategorySkeleton />
			</SwiperSkeleton>

			<template #fallback>
				<CategorySkeleton />
			</template>
		</ClientOnly>
	</section>
</template>

<script setup>
// Swiper
import { SwiperSlide } from 'swiper/vue'
const swiperOptions = {
	pagination: false,
	navigation: {
		prevEl: '.category-swiper-prev',
		nextEl: '.category-swiper-next'
	},
	breakpoints: {
		480: {
			slidesPerView: 2
		},
		640: {
			slidesPerView: 3
		},
		768: {
			slidesPerView: 4
		},
		1024: {
			slidesPerView: 5
		},
		1280: {
			slidesPerView: 6
		},
		1440: {
			slidesPerView: 7
		}
	}
}

// Strapi
const isLoading = ref(true)
const categories = reactive({})
const getCategories = async () => {
	isLoading.value = true
	const data = [
		{
			id: 1,
			attributes: {
				Name: 'Coffee & Tea',
				createdAt: '2022-07-29T17:35:22.535Z',
				updatedAt: '2022-07-29T17:35:23.959Z',
				publishedAt: '2022-07-29T17:35:23.955Z',
				Image: {
					data: {
						id: 18,
						attributes: {
							name: 'Category-Coffee_Tea.webp',
							alternativeText: 'Category-Coffee_Tea.webp',
							caption: 'Category-Coffee_Tea.webp',
							width: 360,
							height: 360,
							formats: {
								thumbnail: {
									ext: '.webp',
									url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659116048/Groceyish/Strapi/thumbnail_Category_Coffe_Tea_14047dc4f7.webp',
									hash: 'thumbnail_Category_Coffe_Tea_14047dc4f7',
									mime: 'image/webp',
									name: 'thumbnail_Category-Coffe_Tea.webp',
									path: null,
									size: 5.58,
									width: 156,
									height: 156,
									provider_metadata: {
										public_id:
											'Groceyish/Strapi/thumbnail_Category_Coffe_Tea_14047dc4f7',
										resource_type: 'image'
									}
								}
							},
							hash: 'Category_Coffe_Tea_14047dc4f7',
							ext: '.webp',
							mime: 'image/webp',
							size: 14.58,
							url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659116048/Groceyish/Strapi/Category_Coffe_Tea_14047dc4f7.webp',
							previewUrl: null,
							provider: 'cloudinary',
							provider_metadata: {
								public_id: 'Groceyish/Strapi/Category_Coffe_Tea_14047dc4f7',
								resource_type: 'image'
							},
							createdAt: '2022-07-29T17:34:09.243Z',
							updatedAt: '2022-07-29T17:35:07.202Z'
						}
					}
				},
				Products: {
					data: [
						{
							id: 22,
							attributes: {
								Name: 'Gold Instant Coffee - 200g',
								createdAt: '2022-07-29T19:00:15.167Z',
								updatedAt: '2022-07-29T19:00:15.876Z',
								publishedAt: '2022-07-29T19:00:15.873Z',
								Brand: 'Nescafe',
								Price_Current: 167.5,
								Price_Original: 193,
								Price_Currency: 'EGP',
								Rating_Value: 5,
								Rating_Users: 573,
								isFeatured: true,
								isBestDeal: false,
								isDailyBestSell: false
							}
						},
						{
							id: 12,
							attributes: {
								Name: 'Dust Black Tea - 100 g',
								createdAt: '2022-07-29T18:47:56.637Z',
								updatedAt: '2022-07-29T18:48:47.728Z',
								publishedAt: '2022-07-29T18:48:47.724Z',
								Brand: 'Lipton',
								Price_Current: 10,
								Price_Original: 14,
								Price_Currency: 'EGP',
								Rating_Value: 5,
								Rating_Users: 110,
								isFeatured: true,
								isBestDeal: true,
								isDailyBestSell: false
							}
						},
						{
							id: 17,
							attributes: {
								Name: 'Extra Strong Loose Tea - 200 g ',
								createdAt: '2022-07-29T18:53:15.024Z',
								updatedAt: '2022-07-29T18:53:25.101Z',
								publishedAt: '2022-07-29T18:53:15.755Z',
								Brand: "Rabee'",
								Price_Current: 30.25,
								Price_Original: 31,
								Price_Currency: 'EGP',
								Rating_Value: 1.3,
								Rating_Users: 37,
								isFeatured: false,
								isBestDeal: false,
								isDailyBestSell: false
							}
						},
						{
							id: 33,
							attributes: {
								Name: 'Mango Magic Flavoured Black Tea with Fruit Pieces - 20 Bags ',
								createdAt: '2022-07-29T19:06:50.155Z',
								updatedAt: '2022-07-29T19:06:50.844Z',
								publishedAt: '2022-07-29T19:06:50.842Z',
								Brand: 'Ahmed Tea',
								Price_Current: 39,
								Price_Original: null,
								Price_Currency: 'EGP',
								Rating_Value: 4.2,
								Rating_Users: 40,
								isFeatured: false,
								isBestDeal: false,
								isDailyBestSell: false
							}
						},
						{
							id: 18,
							attributes: {
								Name: 'Fine Black Tea - 40 g',
								createdAt: '2022-07-29T18:56:22.048Z',
								updatedAt: '2022-07-29T18:56:22.826Z',
								publishedAt: '2022-07-29T18:56:22.824Z',
								Brand: 'Blue Tea Pot',
								Price_Current: 3.5,
								Price_Original: 6,
								Price_Currency: 'EGP',
								Rating_Value: 4,
								Rating_Users: 199,
								isFeatured: false,
								isBestDeal: false,
								isDailyBestSell: true
							}
						},
						{
							id: 10,
							attributes: {
								Name: 'Classic Instant Coffee - 200 g',
								createdAt: '2022-07-29T18:44:18.467Z',
								updatedAt: '2022-07-29T18:44:19.246Z',
								publishedAt: '2022-07-29T18:44:19.243Z',
								Brand: 'Nescafe',
								Price_Current: 102,
								Price_Original: 120,
								Price_Currency: 'EGP',
								Rating_Value: 4.3,
								Rating_Users: 275,
								isFeatured: false,
								isBestDeal: false,
								isDailyBestSell: true
							}
						}
					]
				}
			}
		}
	]
	// await useStrapi().getCategories()
	Object.assign(categories, data)
	isLoading.value = false
}
onMounted(() => {
	getCategories()
})
</script>

<style scoped lang="scss">
.wrapper {
	@apply container flex flex-col gap-4;
}
</style>
