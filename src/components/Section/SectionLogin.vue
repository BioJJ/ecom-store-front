<template>
	<section class="app-section">
		<div class="wrapper">
			<img
				src="~/assets/icons/Shopping.svg"
				alt="Shopping Illustration"
				class="mx-auto lg:h-[350px] lg:w-[500px] lg:basis-full"
			/>

			<div class="flex flex-col gap-4 lg:basis-full">
				<div>
					<h2 class="mb-2">Login</h2>
					<p>
						Don't have an account?
						<NuxtLink to="/user/signup" class="font-medium text-green-200">
							Signup
						</NuxtLink>
					</p>
				</div>

				<form class="flex flex-col gap-2">
					<div class="input-container">
						<span i-carbon-email></span>
						<input
							id="email"
							v-model="email"
							type="email"
							placeholder="Email address"
						/>
					</div>

					<div class="input-container">
						<span i-bx-lock-alt></span>
						<input
							id="password"
							v-model="password"
							type="password"
							placeholder="Password"
						/>
					</div>

					<p
						class="error-message opacity-0"
						:class="{ 'opacity-100': !emailPasswordValid }"
					>
						Invalid Email or password
					</p>

					<button
						class="app-button mx-auto w-fit"
						@click.prevent="emailPasswordLogin"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup>
// const router = useRouter()
// const user = useStrapiUser()
// if (user.value) router.push('/')

// const { login } = useStrapiAuth()
const email = ref('')
const password = ref('')
const emailPasswordValid = ref(true)
const emailPasswordLogin = async () => {
	try {
		emailPasswordValid.value = true
		await login({ identifier: email.value, password: password.value })
		router.push('/')
	} catch (error) {
		emailPasswordValid.value = false
	}
}

const isModalVisible = ref(false)
</script>

<style scoped lang="scss">
.wrapper {
	@apply container flex flex-col gap-4 lg:flex-row lg:items-center;
}

.input-container {
	@apply relative overflow-hidden rounded-lg border border-green-200;

	span {
		@apply absolute top-1/2 left-2 -translate-y-1/2 text-gray-200;
	}

	input {
		@apply w-full py-2 pl-8 pr-4 text-sm font-medium outline-none placeholder:font-normal placeholder:text-gray-200;
	}
}

.error-message {
	@apply text-sm font-medium text-red-700  transition-opacity;
}
</style>
