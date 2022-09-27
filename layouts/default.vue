<template>
	<div class='app'>
		<slot />
	</div>
</template>

<script setup>
useHead({
	title: 'Farmers Agency Growth Platform Marketing Build Tool',
	viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
	htmlAttrs: {
		class: 'h-full bg-gray-100'
	},
	bodyAttrs: {
		class: 'h-full'
	},
})
</script>