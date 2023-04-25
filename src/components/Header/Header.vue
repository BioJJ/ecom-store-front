<template>
	<header class="relative">
		<HeaderControls @hamburger-clicked="toggleNav" />
		<HeaderNav />
	</header>
</template>

<script setup>
const isNavVisible = ref(false)
provide('isNavVisible', isNavVisible)
const toggleNav = () => {
	isNavVisible.value = !isNavVisible.value
}
</script>
