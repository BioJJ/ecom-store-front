<script setup>
const emit = defineEmits(['categoryIdChange'])

// Swiper
import { SwiperSlide } from 'swiper/vue'
const swiperOptions = {
	pagination: false,
	centeredSlides: true
}

// Strapi
const isLoading = ref(true)
const productDetails = reactive({
	id: 3,
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
				},
				{
					id: 116,
					attributes: {
						name: 'N52757572_A_3_633ecc4763.webp',
						alternativeText: 'N52757572_A_3_633ecc4763.webp',
						caption: 'N52757572_A_3_633ecc4763.webp',
						width: 400,
						height: 546,
						formats: {
							small: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117789/Groceyish/Strapi/small_N52757572_A_3_633ecc4763_18acac16bd.webp',
								hash: 'small_N52757572_A_3_633ecc4763_18acac16bd',
								mime: 'image/webp',
								name: 'small_N52757572_A_3_633ecc4763.webp',
								path: null,
								size: 16.77,
								width: 366,
								height: 500,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/small_N52757572_A_3_633ecc4763_18acac16bd',
									resource_type: 'image'
								}
							},
							thumbnail: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117788/Groceyish/Strapi/thumbnail_N52757572_A_3_633ecc4763_18acac16bd.webp',
								hash: 'thumbnail_N52757572_A_3_633ecc4763_18acac16bd',
								mime: 'image/webp',
								name: 'thumbnail_N52757572_A_3_633ecc4763.webp',
								path: null,
								size: 3.45,
								width: 114,
								height: 156,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/thumbnail_N52757572_A_3_633ecc4763_18acac16bd',
									resource_type: 'image'
								}
							}
						},
						hash: 'N52757572_A_3_633ecc4763_18acac16bd',
						ext: '.webp',
						mime: 'image/webp',
						size: 21.4,
						url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117788/Groceyish/Strapi/N52757572_A_3_633ecc4763_18acac16bd.webp',
						previewUrl: null,
						provider: 'cloudinary',
						provider_metadata: {
							public_id: 'Groceyish/Strapi/N52757572_A_3_633ecc4763_18acac16bd',
							resource_type: 'image'
						},
						createdAt: '2022-07-29T18:03:09.379Z',
						updatedAt: '2022-07-29T18:03:09.379Z'
					}
				},
				{
					id: 115,
					attributes: {
						name: 'N52757572_A_2_5df86b6d79.webp',
						alternativeText: 'N52757572_A_2_5df86b6d79.webp',
						caption: 'N52757572_A_2_5df86b6d79.webp',
						width: 400,
						height: 546,
						formats: {
							small: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117788/Groceyish/Strapi/small_N52757572_A_2_5df86b6d79_66fe11a0a2.webp',
								hash: 'small_N52757572_A_2_5df86b6d79_66fe11a0a2',
								mime: 'image/webp',
								name: 'small_N52757572_A_2_5df86b6d79.webp',
								path: null,
								size: 20.17,
								width: 366,
								height: 500,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/small_N52757572_A_2_5df86b6d79_66fe11a0a2',
									resource_type: 'image'
								}
							},
							thumbnail: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117787/Groceyish/Strapi/thumbnail_N52757572_A_2_5df86b6d79_66fe11a0a2.webp',
								hash: 'thumbnail_N52757572_A_2_5df86b6d79_66fe11a0a2',
								mime: 'image/webp',
								name: 'thumbnail_N52757572_A_2_5df86b6d79.webp',
								path: null,
								size: 3.76,
								width: 114,
								height: 156,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/thumbnail_N52757572_A_2_5df86b6d79_66fe11a0a2',
									resource_type: 'image'
								}
							}
						},
						hash: 'N52757572_A_2_5df86b6d79_66fe11a0a2',
						ext: '.webp',
						mime: 'image/webp',
						size: 26.44,
						url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117787/Groceyish/Strapi/N52757572_A_2_5df86b6d79_66fe11a0a2.webp',
						previewUrl: null,
						provider: 'cloudinary',
						provider_metadata: {
							public_id: 'Groceyish/Strapi/N52757572_A_2_5df86b6d79_66fe11a0a2',
							resource_type: 'image'
						},
						createdAt: '2022-07-29T18:03:08.402Z',
						updatedAt: '2022-07-29T18:03:08.402Z'
					}
				},
				{
					id: 113,
					attributes: {
						name: 'N52757572_A_1_98bf114b70.webp',
						alternativeText: 'N52757572_A_1_98bf114b70.webp',
						caption: 'N52757572_A_1_98bf114b70.webp',
						width: 400,
						height: 546,
						formats: {
							small: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117786/Groceyish/Strapi/small_N52757572_A_1_98bf114b70_ed7b24cdff.webp',
								hash: 'small_N52757572_A_1_98bf114b70_ed7b24cdff',
								mime: 'image/webp',
								name: 'small_N52757572_A_1_98bf114b70.webp',
								path: null,
								size: 18.92,
								width: 366,
								height: 500,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/small_N52757572_A_1_98bf114b70_ed7b24cdff',
									resource_type: 'image'
								}
							},
							thumbnail: {
								ext: '.webp',
								url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117786/Groceyish/Strapi/thumbnail_N52757572_A_1_98bf114b70_ed7b24cdff.webp',
								hash: 'thumbnail_N52757572_A_1_98bf114b70_ed7b24cdff',
								mime: 'image/webp',
								name: 'thumbnail_N52757572_A_1_98bf114b70.webp',
								path: null,
								size: 3.72,
								width: 114,
								height: 156,
								provider_metadata: {
									public_id:
										'Groceyish/Strapi/thumbnail_N52757572_A_1_98bf114b70_ed7b24cdff',
									resource_type: 'image'
								}
							}
						},
						hash: 'N52757572_A_1_98bf114b70_ed7b24cdff',
						ext: '.webp',
						mime: 'image/webp',
						size: 24.23,
						url: 'https://res.cloudinary.com/cloud-m98/image/upload/v1659117785/Groceyish/Strapi/N52757572_A_1_98bf114b70_ed7b24cdff.webp',
						previewUrl: null,
						provider: 'cloudinary',
						provider_metadata: {
							public_id: 'Groceyish/Strapi/N52757572_A_1_98bf114b70_ed7b24cdff',
							resource_type: 'image'
						},
						createdAt: '2022-07-29T18:03:07.286Z',
						updatedAt: '2022-07-29T18:03:07.286Z'
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

const getProduct = async (productID) => {
	isLoading.value = true
	const data = []
	// await useStrapi().getProduct(productID);
	Object.assign(productDetails, data)
	isLoading.value = false

	// Emiting the category ID to get the related products
	const categoryID = 'Laundry'
	// productDetails.attributes.Category.data.attributes.Name;
	emit('categoryIdChange', categoryID)
}

onMounted(() => {
	const productID = useRoute().params.id // Getting the Product ID from the url
	getProduct(productID)
})
</script>

<template>
	<section class="app-section">
		<div class="wrapper">
			<!-- Product Details -->
			<div class="flex flex-col gap-4 lg:col-span-3 lg:flex-row">
				<!-- Product Images -->
				<ClientOnly>
					<Swiper
						v-if="!isLoading"
						:swiper-options="swiperOptions"
						class="product-image-swiper"
					>
						<SwiperSlide
							v-for="image in productDetails.attributes.Image.data"
							:key="image.id"
						>
							<img :src="image.attributes.url" alt="" />
						</SwiperSlide>
					</Swiper>

					<div
						v-else
						class="h-80 w-80 animate-pulse rounded-full bg-gray-100"
					/>

					<template #fallback>
						<div class="h-80 w-80 animate-pulse rounded-full bg-gray-100" />
					</template>
				</ClientOnly>

				<!-- Product Info -->
				<ProductCardFull
					v-if="!isLoading"
					:product="productDetails"
					class="lg:basis-full"
				/>

				<div v-else class="flex grow flex-col gap-2">
					<div class="h-6 w-1/3 animate-pulse rounded-full bg-gray-100"></div>
					<div class="h-4 w-1/6 animate-pulse rounded-full bg-gray-100"></div>
					<div class="h-7 w-3/4 animate-pulse rounded-full bg-gray-100"></div>
					<div class="h-4 w-1/6 animate-pulse rounded-full bg-gray-100"></div>
					<div class="h-7 w-1/2 animate-pulse rounded-full bg-gray-100"></div>
				</div>
			</div>

			<!-- Product Perks -->
			<div class="product-perks">
				<ul>
					<li>
						<span i-carbon-reset class="text-2xl"></span>
						<p>Enjoy hassle free returns.</p>
					</li>

					<li>
						<span i-carbon-number-2 class="text-2xl"></span>
						<p>2 Years warranty.</p>
					</li>

					<li>
						<span i-bxs-check-shield class="text-2xl"> </span>
						<p>Guaranteed by <span>Groceyish</span>.</p>
					</li>
				</ul>
			</div>

			<AppCartTooltip :is-tooltip-activated="true" />
		</div>
	</section>
</template>

<style lang="scss">
.wrapper {
	@apply container grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-20;
}
.product-image-swiper {
	--swiper-theme-color: #237d64;
	--swiper-navigation-size: 16px;

	@apply flex items-center;

	.swiper-wrapper {
		@apply max-h-[400px];
	}

	.swiper-button-next,
	.swiper-button-prev {
		@apply flex items-center justify-center rounded-full p-5 transition-colors;
		@apply bg-gray-100 text-gray-200 hover:bg-green-200 hover:text-white;

		&.swiper-button-lock {
			@apply hidden;
		}
	}

	.swiper-slide {
		@apply flex items-center px-16;
		img {
			@apply mx-auto max-h-full;
		}
	}
}

.product-perks {
	@apply lg:col-span-1 lg:border-l lg:border-gray-100 lg:px-4;

	ul {
		@apply flex flex-col gap-2;

		li {
			@apply flex items-center gap-2;

			span {
				@apply font-medium text-green-200;
			}
		}
	}
}
</style>
