<script setup>
import { RouterView } from 'vue-router';

</script>

<template>
	<main class="main">
		<RouterView />
	</main>
		<img class="img-decorate img-ufo" src="/ufo.webp" />
		<img class="img-decorate img-planet-1" src="/planet-1.webp" />
		<img class="img-decorate img-planet-2" src="/planet-2.webp" />
		<img class="img-decorate img-planet-3" src="/planet-3.webp" />
</template>

<style scoped>

  .main {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4em;
		padding-top: 6em;
	}
  .img-decorate {
		position: absolute;
	}

	.img-ufo {
		right: 0px;
		top: 0;
		width: 250px;
		transform: rotate(-20deg);
	}

	.img-planet-1 {
		bottom: -50px;
		right: -120px;
		width: 300px;
	}

	.img-planet-2 {
		left: -200px;
		top: 0;
		width: 400px;
		transform: rotate(50deg);
	}

	.img-planet-3 {
		left: -100px;
		bottom: -50px;
		width: 300px;
	}

	@media (max-width: 500px) {
		.img-ufo {
			right: -50px;
			top: 0;
			width: 100px;
			transform: rotate(-20deg);
		}

		.img-planet-1 {
			bottom: -20px;
			right: -80px;
			width: 200px;
		}

		.img-planet-2 {
			left: -100px;
			top: -20px;
			width: 200px;
		}

		.img-planet-3 {
			left: -80px;
			bottom: 0;
			width: 250px;
		}

	}

</style>
