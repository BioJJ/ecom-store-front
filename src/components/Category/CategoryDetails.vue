<script setup>
// Strapi
const isLoading = ref(true)
const categoryDetails = reactive({
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
})
const productsList = reactive([
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
])

const getCategory = async (categoryID) => {
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
	// await useStrapi().getCategory(categoryID);
	Object.assign(categoryDetails, data)
	productsList.value = categoryDetails.attributes.Products.data
	isLoading.value = false
}

onMounted(() => {
	const categoryID = useRoute().params.id // Getting the Category ID from the url
	getCategory(categoryID)
})

// Pagination
const productsCount = computed(() => productsList.value.length)
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
	if (selector === 'Name - Descending') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Name < b.attributes.Name) {
				return -1
			}
			if (a.attributes.Name > b.attributes.Name) {
				return 1
			}
			return 0
		})
	} else if (selector === 'Name - Ascending') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Name > b.attributes.Name) {
				return -1
			}
			if (a.attributes.Name < b.attributes.Name) {
				return 1
			}
			return 0
		})
	} else if (selector === 'Price - Low to High') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Price_Current < b.attributes.Price_Current) {
				return -1
			}
			if (a.attributes.Price_Current > b.attributes.Price_Current) {
				return 1
			}
			return 0
		})
	} else if (selector === 'Price - High to Low') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Price_Current > b.attributes.Price_Current) {
				return -1
			}
			if (a.attributes.Price_Current < b.attributes.Price_Current) {
				return 1
			}
			return 0
		})
	} else if (selector === 'Rating - Low to High') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Rating_Value < b.attributes.Rating_Value) {
				return -1
			}
			if (a.attributes.Rating_Value > b.attributes.Rating_Value) {
				return 1
			}
			return 0
		})
	} else if (selector === 'Rating - High to Low') {
		productsList.value.sort((a, b) => {
			if (a.attributes.Rating_Value > b.attributes.Rating_Value) {
				return -1
			}
			if (a.attributes.Rating_Value < b.attributes.Rating_Value) {
				return 1
			}
			return 0
		})
	}
}
onMounted(() => {
	sortResults(sortFilters[0])
})
</script>

<template>
	<section class="app-section">
		<div class="wrapper">
			<br />

			<CategoryBanner
				v-if="!isLoading"
				:category-name="categoryDetails.attributes.Name"
				:category-img-url="categoryDetails.attributes.Image.data.attributes.url"
			/>
			<div v-else class="h-12 w-full animate-pulse rounded-full bg-gray-100" />

			<div class="category-products">
				<!-- Summary -->
				<div v-if="!isLoading" class="summary">
					<!-- Results Count -->
					<p class="text-gray-200">
						Found
						<span class="font-medium text-green-200">
							{{ categoryDetails.attributes.Products.data.length }}
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
						<button v-if="previousPage" @click="currentPage--">
							<span block i-bx-left-arrow-alt></span>
						</button>

						<p class="text-gray-200">
							Page
							<span>{{ currentPage }}</span>
							of
							<span>{{ numberOfPages }}</span>
						</p>

						<button v-if="nextPage <= numberOfPages" @click="currentPage++">
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

.category-products {
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
