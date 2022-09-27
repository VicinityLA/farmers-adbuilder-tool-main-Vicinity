export default {
	
	data() {
		return {
			ready: false,
			printed: false,
			agent_id: false,
			selected: {},
			page_setup: {},
			agent: {},
			options: {}
		};
	},
	
	watch: {
		ready() {
			const options = JSON.parse( JSON.stringify(this.options) )
			window.parent.postMessage({ message: 'init', data: {} })
			this.sendOptionsMessage()
		}
	},
	
	methods: {
		// Get selected options from parent window.
		receiveOptionsMessage(message) {
			if (message && message.data && message.data.message === 'selected' && message.data.data ) {
				console.info("Updating settings from parent window...")
				for ( const key in message.data.data ) {
					this.selected[key] = message.data.data[key]
				} 
			}
			if (message && message.data && message.data.message === 'page_setup' && message.data.data ) {
				console.info("Updating page setup from parent window...")
				this.page_setup = message.data.data
			}
			if (message && message.data && message.data.message === 'agent' && message.data.data ) {
				console.info("Updating agent from parent window...")
				this.agent = message.data.data
			}
		},
		// Send our options to the parent window for display.
		sendOptionsMessage() {
			console.info("Sending options for template to controller...")
			window.parent.postMessage({ message: 'options', data: JSON.parse( JSON.stringify( this.options ) ) })
		},
	},
	
	mounted() {
		console.info(`Template was mounted and is ready to received messages.`)
		window.addEventListener('message', this.receiveOptionsMessage)
		this.ready = true
	},
	
	beforeDestroy() {
		window.removeEventListener('message', this.receiveOptionsMessage)
		this.ready = false
	}
}