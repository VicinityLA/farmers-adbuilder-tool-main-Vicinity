<script>
export default {
	props: ['modelValue'],
	emits: ['update:modelValue']
}
</script>
<template>
	<input 
		:value="modelValue"
		@input="$emit('update:modelValue', !modelValue)"
		type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
</template>