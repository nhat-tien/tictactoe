<script setup>
import { useGameStateStore } from '@/stores/gameState';

const props = defineProps(['value','row','col']);
const gameState = useGameStateStore();


const handleMove = () => {
	if (gameState.turn === gameState.player) {
	  gameState.move([props.row, props.col])
	}	
}

</script>
<template>
	<div class="square" @click="handleMove">
		{{ props.value }}
	</div>
</template>
<style scoped>
.square {
	border: 1px solid black;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
