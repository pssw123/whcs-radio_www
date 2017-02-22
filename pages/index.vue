<template>
	<div id="indexPage">
<!-- 		<slide-show /> -->
			<landing />
 			<player-bar />
	</div>
</template>

<script>
	// import SlideShow from '~components/SlideShow.vue'
	import Landing from '~components/Landing.vue'
	import PlayerBar from '~components/PlayerBar.vue'
	export default {
		components: {
			// SlideShow,
			Landing,
			PlayerBar,

		}
	}

</script>