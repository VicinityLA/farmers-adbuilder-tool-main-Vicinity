<script setup>
	definePageMeta({
		layout: "templates",
		title: 'Marketing Template Preview'
	})
</script>
<script>
	export default {
		data() {
			return {
				active: false
			};
		},
		computed: {
			templateName() {
				return `templates-${this.$route.params.slug}`;
			}
		}
	}
</script>
<template>
	<component :is="templateName"></component>
</template>