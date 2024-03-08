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
	/* border: 1px solid black; */
	font-size: 5rem;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;

}
</style>
