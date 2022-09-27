<script>
	import templateBase from '~/mixins/template.js';
	export default {
		mixins: [ templateBase ],
		data() {			
			return { 
				options: {
					photo: {
						label: "Featured Image",
						options: {
							first: 'Accountant, Image #1',
							second: 'Accountant, Image #2',
							third: 'Accountant, Image #3',
							fourth: 'Nurse, Image #4',
						}
					},
					cta: {
						label: 'Call to action',
						options: {
							english: 'English',
							esformal: 'Spanish, Formal',
							esinformal: 'Spanish, Informal',
							viet: 'Vietnamese',
							mandarin: 'China, Mandarin',
							korean: 'Korean',
						}
					}
				}
			}
		}
	}
</script>

<style lang='scss' src='./styles.scss'></style>
<template src='./template.html'></template>