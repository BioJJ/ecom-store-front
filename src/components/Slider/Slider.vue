<template>
	<section>
		<Swiper class="intro-swiper" :swiper-options="swiperOptions">
			<SwiperSlide class="intro-slide bg-intro-slide-1">
				<h1></h1>
				<p>!</p>
			</SwiperSlide>

			<SwiperSlide class="intro-slide bg-intro-slide-2">
				<h1></h1>
				<p></p>
			</SwiperSlide>

			<SwiperSlide class="intro-slide bg-intro-slide-3">
				<h1>.</h1>
				<p>.</p>
				<h1>.</h1>
			</SwiperSlide>
		</Swiper>
	</section>
</template>

<script setup>
import { SwiperSlide } from 'swiper/vue'

const swiperOptions = {
	effect: 'fade',
	fadeEffect: {
		crossFade: true
	},
	centeredSlides: true
}
</script>

<style lang="scss">
.intro-swiper {
	--swiper-theme-color: #237d64;
	--swiper-navigation-size: 16px;

	.intro-slide {
		@apply bg-cover bg-no-repeat py-32 px-20;
		@apply flex h-auto flex-col items-center justify-center gap-12 text-center;
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
