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
const featured = reactive({})
const getFeatured = async () => {
	isLoading.value = true
	const data = [
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
				isDailyBestSell: false,
				Image: {
					data: [
						{
							id: 74,
							attributes: {
								name: '71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
								alternativeText: '71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
								caption: '71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
								width: 628,
								height: 1500,
								formats: {
									large: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117731/Groceyish/Strapi/large_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6.webp',
										hash: 'large_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
										mime: 'image/webp',
										name: 'large_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
										path: null,
										size: 58.15,
										width: 419,
										height: 1000,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/large_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
											resource_type: 'image'
										}
									},
									small: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117732/Groceyish/Strapi/small_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6.webp',
										hash: 'small_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
										mime: 'image/webp',
										name: 'small_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
										path: null,
										size: 20.87,
										width: 209,
										height: 500,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/small_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
											resource_type: 'image'
										}
									},
									medium: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117731/Groceyish/Strapi/medium_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6.webp',
										hash: 'medium_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
										mime: 'image/webp',
										name: 'medium_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
										path: null,
										size: 40.7,
										width: 314,
										height: 750,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/medium_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
											resource_type: 'image'
										}
									},
									thumbnail: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117730/Groceyish/Strapi/thumbnail_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6.webp',
										hash: 'thumbnail_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
										mime: 'image/webp',
										name: 'thumbnail_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9.webp',
										path: null,
										size: 3.4,
										width: 65,
										height: 156,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/thumbnail_71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
											resource_type: 'image'
										}
									}
								},
								hash: '71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
								ext: '.webp',
								mime: 'image/webp',
								size: 109.86,
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117730/Groceyish/Strapi/71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6.webp',
								previewUrl: null,
								provider: 'cloudinary',
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/71z_ASZ_0_Uh_WL_AC_SL_1500_ab3b635dd9_d34ddaa0b6',
									resource_type: 'image'
								},
								createdAt: '2022-07-29T18:02:12.752Z',
								updatedAt: '2022-07-29T18:02:12.752Z'
							}
						},
						{
							id: 82,
							attributes: {
								name: '81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
								alternativeText: '81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
								caption: '81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
								width: 1500,
								height: 1500,
								formats: {
									large: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117749/Groceyish/Strapi/large_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05.webp',
										hash: 'large_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
										mime: 'image/webp',
										name: 'large_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
										path: null,
										size: 62.91,
										width: 1000,
										height: 1000,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/large_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
											resource_type: 'image'
										}
									},
									small: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117750/Groceyish/Strapi/small_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05.webp',
										hash: 'small_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
										mime: 'image/webp',
										name: 'small_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
										path: null,
										size: 24.68,
										width: 500,
										height: 500,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/small_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
											resource_type: 'image'
										}
									},
									medium: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117750/Groceyish/Strapi/medium_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05.webp',
										hash: 'medium_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
										mime: 'image/webp',
										name: 'medium_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
										path: null,
										size: 44.18,
										width: 750,
										height: 750,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/medium_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
											resource_type: 'image'
										}
									},
									thumbnail: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117749/Groceyish/Strapi/thumbnail_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05.webp',
										hash: 'thumbnail_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
										mime: 'image/webp',
										name: 'thumbnail_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43.webp',
										path: null,
										size: 3.73,
										width: 156,
										height: 156,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/thumbnail_81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
											resource_type: 'image'
										}
									}
								},
								hash: '81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
								ext: '.webp',
								mime: 'image/webp',
								size: 118.44,
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117748/Groceyish/Strapi/81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05.webp',
								previewUrl: null,
								provider: 'cloudinary',
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/81x_ZA_Xw_L_Hj_L_AC_SL_1500_53f43aad43_be0300fe05',
									resource_type: 'image'
								},
								createdAt: '2022-07-29T18:02:31.561Z',
								updatedAt: '2022-07-29T18:02:31.561Z'
							}
						},
						{
							id: 81,
							attributes: {
								name: '81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
								alternativeText: '81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
								caption: '81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
								width: 621,
								height: 1500,
								formats: {
									large: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117748/Groceyish/Strapi/large_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914.webp',
										hash: 'large_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
										mime: 'image/webp',
										name: 'large_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
										path: null,
										size: 144.85,
										width: 414,
										height: 1000,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/large_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
											resource_type: 'image'
										}
									},
									small: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117749/Groceyish/Strapi/small_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914.webp',
										hash: 'small_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
										mime: 'image/webp',
										name: 'small_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
										path: null,
										size: 40.47,
										width: 207,
										height: 500,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/small_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
											resource_type: 'image'
										}
									},
									medium: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117748/Groceyish/Strapi/medium_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914.webp',
										hash: 'medium_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
										mime: 'image/webp',
										name: 'medium_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
										path: null,
										size: 88.76,
										width: 310,
										height: 750,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/medium_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
											resource_type: 'image'
										}
									},
									thumbnail: {
										ext: '.webp',
										url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117747/Groceyish/Strapi/thumbnail_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914.webp',
										hash: 'thumbnail_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
										mime: 'image/webp',
										name: 'thumbnail_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39.webp',
										path: null,
										size: 3.55,
										width: 65,
										height: 156,
										provider_metadata: {
											public_id:
												'Groceyish/Strapi/thumbnail_81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
											resource_type: 'image'
										}
									}
								},
								hash: '81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
								ext: '.webp',
								mime: 'image/webp',
								size: 308.1,
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117747/Groceyish/Strapi/81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914.webp',
								previewUrl: null,
								provider: 'cloudinary',
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/81l_D9v_G1_F3_L_AC_SL_1500_945224dc39_368cecd914',
									resource_type: 'image'
								},
								createdAt: '2022-07-29T18:02:29.789Z',
								updatedAt: '2022-07-29T18:02:29.789Z'
							}
						}
					]
				},
				Category: {
					data: {
						id: 1,
						attributes: {
							Name: 'Coffee & Tea',
							createdAt: '2022-07-29T17:35:22.535Z',
							updatedAt: '2022-07-29T17:35:23.959Z',
							publishedAt: '2022-07-29T17:35:23.955Z'
						}
					}
				}
			}
		}
	]
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
