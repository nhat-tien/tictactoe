<script setup>
import { useRouter } from 'vue-router';
import { useGameStateStore } from '@/stores/gameState';

const router = useRouter();
const gameState = useGameStateStore();

const handlePlayAgain = () => {
	gameState.reset();
  router.push({ path: "/room", replace: true});
}

</script>
<template>
	<button @click="handlePlayAgain">Chơi lại</button>
</template>
