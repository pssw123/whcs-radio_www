<template>
	<div class= 'container'>
		<nav-bar />
		<nuxt />
	</div>
</template>

<script>
		import NavBar from '~components/NavBar.vue'
		export default{
			components: {NavBar}
		}
</script>