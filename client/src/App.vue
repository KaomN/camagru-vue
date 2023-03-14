<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			Header,
			Footer
		}
	}
</script>

<template>
	<Header />
	<router-view />
	<Footer />
</template>

<style>
	body {
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 0;
	}
</style>