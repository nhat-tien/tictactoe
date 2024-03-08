<script setup>
import { RouterLink } from 'vue-router';
import PrimaryButton from '@/components/PrimaryButton.vue';

</script>

<template>
		<img class="heading" src="/heading.png" />
		<RouterLink to="/room" >
			<PrimaryButton>
				Play
			</PrimaryButton>
		</RouterLink>
</template>

<style scoped>

	.heading {
		width: 60%;
		min-width: 350px;
	}

</style>
