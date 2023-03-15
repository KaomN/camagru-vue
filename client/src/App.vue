<script>
	import Header from './components/Header.vue';
	import Footer from './components/Footer.vue';

	export default {
		components: {
			Header,
			Footer,
		}
	}
</script>

<template>
	<v-app>
		<Header />
		<!-- Centering Views -->
		<v-main>
			<v-container fluid class="fill-height">
				<v-row>
					<v-col class="d-flex justify-center">
						<router-view />
					</v-col>
				</v-row>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>

<style>
	body {
		font-family: 'Roboto', sans-serif;
		margin: 0;
		padding: 0;
	}
</style>