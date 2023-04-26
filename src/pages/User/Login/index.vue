<template>
	<main>
		<SectionLogin />
		<SectionPerks />
	</main>
</template>

<script setup>
useHead({ title: `ECOM-STORE - Login` })

const login = ref([
	{ email: 'jefferson@gmail.com', password: 'Jefferson@2023' }
])
onBeforeMount(async () => {
	const response = await $fetch('http://localhost:3000/login', {
		method: 'POST',
		body: { email: 'jefferson@gmail.com', password: 'Jefferson@2023' }
	})
	console.log('response:', response)
})
</script>
