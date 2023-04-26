<script setup>
// Route Query Params
const route = useRoute()
watch(
	() => route.query,
	() => getProducts()
)
const heading = ref('All Products')

// Strapi
const isLoading = ref(true)
const productsList = ref({
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

const getProducts = async () => {
	isLoading.value = true
	let data
	if (route.query.featured) {
		// data = await useStrapi().getFeatured();
		heading.value = 'Featured Products'
	} else if (route.query.dailyBestSells) {
		// data = await useStrapi().getDailyBestSells();
		heading.value = 'Daily Best Sells'
	} else {
		// data = await useStrapi().getProducts();
		heading.value = 'All Products'
	}
	productsList.value = data

	isLoading.value = false
}
onMounted(() => {
	getProducts()
})

// Pagination
const productsCount = computed(() => 0)
const resultsPerPage = ref(10)
const currentPage = ref(1)
const numberOfPages = computed(() =>
	Math.ceil(productsCount.value / resultsPerPage.value)
)
const nextPage = computed(() => currentPage.value + 1)
const previousPage = computed(() => currentPage.value - 1)
const startIndex = computed(
	() => (currentPage.value - 1) * resultsPerPage.value
)
const endIndex = computed(() => currentPage.value * resultsPerPage.value)

// Search Filters
// ---- Results Per Page
const showFilters = [
	resultsPerPage.value,
	resultsPerPage.value + 10,
	resultsPerPage.value + 20
]

const updateResultsPerPage = (newValue) => {
	resultsPerPage.value = newValue
}

// ---- Sort
const sortFilters = [
	'Name - Descending',
	'Name - Ascending',
	'Price - Low to High',
	'Price - High to Low',
	'Rating - Low to High',
	'Rating - High to Low'
]
const sortResults = (selector) => {
	// if (selector === 'Name - Descending') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Name < b.attributes.Name) {
	//       return -1;
	//     }
	//     if (a.attributes.Name > b.attributes.Name) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// } else if (selector === 'Name - Ascending') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Name > b.attributes.Name) {
	//       return -1;
	//     }
	//     if (a.attributes.Name < b.attributes.Name) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// } else if (selector === 'Price - Low to High') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Price_Current < b.attributes.Price_Current) {
	//       return -1;
	//     }
	//     if (a.attributes.Price_Current > b.attributes.Price_Current) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// } else if (selector === 'Price - High to Low') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Price_Current > b.attributes.Price_Current) {
	//       return -1;
	//     }
	//     if (a.attributes.Price_Current < b.attributes.Price_Current) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// } else if (selector === 'Rating - Low to High') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Rating_Value < b.attributes.Rating_Value) {
	//       return -1;
	//     }
	//     if (a.attributes.Rating_Value > b.attributes.Rating_Value) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// } else if (selector === 'Rating - High to Low') {
	//   productsList.value.sort((a, b) => {
	//     if (a.attributes.Rating_Value > b.attributes.Rating_Value) {
	//       return -1;
	//     }
	//     if (a.attributes.Rating_Value < b.attributes.Rating_Value) {
	//       return 1;
	//     }
	//     return 0;
	//   });
	// }
}
onMounted(() => {
	// sortResults(sortFilters[0]);
})
</script>

<template>
	<section class="app-section">
		<div class="wrapper">
			<h2 v-if="!isLoading">{{ heading }}</h2>
			<div v-else class="h-8 w-96 animate-pulse rounded-full bg-gray-100" />

			<div class="products">
				<!-- Summary -->
				<div v-if="!isLoading" class="summary">
					<!-- Results Count -->
					<p class="text-gray-200">
						Found
						<span class="font-medium text-green-200">
							{{ productsCount }}
						</span>
						Items!
					</p>

					<!-- Controls -->
					<div class="flex flex-col gap-2 2xs:flex-row">
						<BaseDropdown
							:values="showFilters"
							class="basis-full"
							@value-changed="updateResultsPerPage"
						>
							<template #icon>
								<span i-carbon-show-data-cards></span>
							</template>
							<template #caption> Show: </template>
						</BaseDropdown>

						<BaseDropdown
							:values="sortFilters"
							class="basis-full"
							@value-changed="sortResults"
						>
							<template #icon> <span i-bx-sort></span> </template>
							<template #caption> Sort: </template>
						</BaseDropdown>
					</div>
				</div>
				<div v-else class="summary">
					<div class="h-8 w-80 animate-pulse rounded-full bg-gray-100" />
					<div class="h-8 w-80 animate-pulse rounded-full bg-gray-100" />
				</div>

				<!-- Results -->
				<div v-if="!isLoading" class="products-grid">
					<ProductCard
						v-for="product in productsList.slice(startIndex, endIndex)"
						:key="product.id"
						:product="product"
					/>

					<!-- Pagination -->
					<div class="pagination-controls">
						<button
							v-if="previousPage"
							aria-label="Previous Page"
							@click="currentPage--"
						>
							<span block i-bx-left-arrow-alt></span>
						</button>

						<p class="text-gray-200">
							Page
							<span>{{ currentPage }}</span>
							of
							<span>{{ numberOfPages }}</span>
						</p>

						<button
							v-if="nextPage <= numberOfPages"
							aria-label="Next Page"
							@click="currentPage++"
						>
							<span block i-bx-right-arrow-alt></span>
						</button>
					</div>
				</div>
				<div v-else class="products-grid">
					<ProductSkeleton v-for="index in resultsPerPage" :key="index" />
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped lang="scss">
.wrapper {
	@apply container flex flex-col gap-4;
}

.products {
	@apply flex flex-col gap-4;
}

.summary {
	@apply flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between;
}

.products-grid {
	@apply grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5;

	@media (min-width: 480px) and (max-width: 768px) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
}

.pagination-controls {
	@apply col-span-full flex items-center justify-center gap-4;

	p {
		span {
			@apply font-medium text-blue-200;
		}
	}

	button {
		@apply flex w-fit items-center justify-center  p-2;
		@apply rounded-full bg-gray-100 transition-colors  hover:bg-green-200 hover:text-white;

		span {
			@apply text-xl;
		}
	}
}
</style>
