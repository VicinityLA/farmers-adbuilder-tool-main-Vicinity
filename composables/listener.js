export default function (event, listener) {
	onBeforeMount(() => {
		window.addEventListener(event, listener);
	});
	
	onMounted(() => {
		listener();
	});
	
	onBeforeUnmount(() => {
		window.removeEventListener(event, listener);
	});
}