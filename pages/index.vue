<script setup>
	
	import { PrinterIcon, FolderAddIcon } from '@heroicons/vue/outline'
	import { reactive, watch, ref } from 'vue'
	
	const iframe = ref(null)
	
	const templates = ref({
		'sample': 'Sample Template',
		'example': 'Sample Template Two',
	})
	
	const agent = {
		name: 'Agent Name',
		phone: '123-456-7890',
		subtitle: 'Your Local Agent',
		license: '#12345678',
		address: '12345 Westminster Blvd, Unit 32A',
		city_state_zip: 'Rancho Santa Margarita, CA 98765',
		email: 'agentname@farmersagent.com',
	}
	
	const route = useRoute()
	const state = reactive({
		asset: {},
		options: {},
		selected: {},
		preview_template: 'sample'
	})
	
	listener('message', (message) => {
		// Init message received from iFrame
		if (message && message.data.message === 'init' && message.data.data) {
			iframe.value.contentWindow.postMessage({ message: 'agent', data: JSON.parse( JSON.stringify(agent) ) })	
		}
		if (message && message.data.message === 'options' && message.data.data) {
			state.options = message.data.data
			for (const key in state.options) {
				if (state.options[key].options) {
					for (const opt_key in state.options[key].options) {
						if ( !state.selected[key] ) state.selected[key] = opt_key
					}
				}
			}
		}
	})
	
	watch(state.selected, (newValue) => {
		if (iframe) {
			iframe.value.contentWindow.postMessage({ message: 'selected', data: JSON.parse( JSON.stringify(newValue) ) })	
		}
	})
	
	async function printTemplate() {
		if (iframe) {
			iframe.value.contentWindow.focus();
			iframe.value.contentWindow.print();			
		}
	}

	definePageMeta({
		layout: "default",
		title: 'Generate Asset'
	})
	
	useHead({
		title: 'Template - Marketing & Assets - Farmers Agency Growth Platform'
	})
	
	defineEmits(['generating', 'reset', 'print'])

</script>

<template>
	<div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 h-full">
		<Head>
			<Title>Marketing & Assets - Farmers Agency Growth Platform</Title>
		</Head>
		<div class='sm:mt-0 md:mt-4 md:pb-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3 h-full'>
			<div class="lg:col-start-1 lg:col-span-1">
				<div class="bg-white overflow-hidden shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:p-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
						<div class='col-span-2'>
							<label for="option-template" class="block text-sm font-medium text-gray-700">Template</label>
							<select v-model='state.preview_template' id="option-template" name="option-template" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
								<option v-for='(opt_value, opt_key) in templates' :value='opt_key' v-html='opt_value'></option>
							</select>
						</div>
					</div>
				</div>
				<div class="bg-white overflow-hidden shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:p-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
						<div class='col-span-2' v-for='(value, key, index) in state.options'>
							<label :for="'option-' + key" class="block text-sm font-medium text-gray-700">{{ value.label }}</label>
							<select v-model='state.selected[key]' :id="'option-' + key" :name="'option-' + key" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
								<option v-for='(opt_value, opt_key) in value.options' :value='opt_key' v-html='opt_value'></option>
							</select>
						</div>
						<div class='col-span-2'>
							<elements-secondary @click.prevent='printTemplate' class='text-farmer hover:text-white'>
								<PrinterIcon class="h-5 w-5 mr-2" aria-hidden="true" />
								Print
							</elements-secondary>
						</div>
					</div>
				</div>
			</div>
			<div class="bg-white overflow-hidden h-full shadow sm:rounded-lg space-y-6 lg:col-start-2 lg:col-span-2">
				<iframe ref='iframe' id='preview' src='/templates/sample' height="100%" width="100%" class="w-full aspect-[8/11]" />
			</div>
		</div>
	</div>
</template>