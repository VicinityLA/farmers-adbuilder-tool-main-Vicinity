<script>
	export default {
		data() {
			return {
				options: {},
				templates: {
					'Sample Template #1' : '/templates/sample',
					'Sample Template #2' : '/template1/sample',
					'Sample Template #3' : '/templates/sample',
				},
				currentTemplate: '/templates/sample',
				agentData: {}
			}
		},
		methods: {	
			printFrame() {
				const frame = document.getElementById("preview").contentWindow;
				frame.focus();
				frame.print();
			}
		}
	}
</script>

<template>
	<div class="bg-white overflow-hidden shadow rounded-sm">
		<div class="px-4 py-5 sm:p-6">
			<div>
				<label for="location" class="block text-sm font-medium text-gray-700">Select Template</label>
				<select v-model="currentTemplate" id="template" name="template" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
					<option v-for="(value, key, index) in templates" :value="value" v-html="key"></option>
				</select>
			  </div>
			  <button @click.prevent="printFrame" type="button" class="mt-5 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-farmer-l-blue hover:bg-farmer-d-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Test Print</button>
		</div>
	</div>
</template>