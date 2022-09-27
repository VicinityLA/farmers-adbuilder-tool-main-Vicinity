<script>
	export default {
		props: ['error']
	}
</script>
<template>
	<p v-if="error" class="mt-2 text-sm text-farmer-red" v-html="error"></p>
</template>