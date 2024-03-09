<script setup>
import Square from '@/components/Square.vue';
import IconPeople from '@/components/icons/IconPeople.vue';
import { useGameStateStore } from '@/stores/gameState'; 
import { computed } from 'vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

const gameState = useGameStateStore();

const enemy = computed(() => {
  return gameState.player == 'x' ? 'o' : 'x';
});

const handlePlayAgain = () => {
	gameState.reset();
  router.push({ path: "/room", replace: true});
}



</script>

<template>
	<div v-if="!gameState.isEnd">
		<div class="statusbar">
			<div class="statusbar__item" :class="[gameState.player == gameState.turn ? '--active' : '', gameState.player == 'x' ? '--blue' : '--red']">
				<IconPeople size="30" />
			  <div >{{ gameState.player }}</div>
			</div>
			<div class="statusbar__item" :class="[enemy == gameState.turn ? '--active' : '', enemy == 'x' ? '--blue' : '--red']">{{ enemy }}</div>
    </div>
		<table>
			<tr v-for="(rowLine, indexRow ) in gameState.board">
				<td v-for="(cell, indexCol) in rowLine">
					<Square :value="cell" :row="indexRow" :col="indexCol"/>
				</td>
			</tr>
		</table>
	</div>
	<div v-else-if="gameState.winner === null">
		<h2 class="result">Hòa</h2>
		<PrimaryButton :callback="handlePlayAgain">Chơi lại</PrimaryButton>
	</div>
	<div v-else-if="gameState.winner === gameState.player">
    <h2 class="result">Bạn đã thắng</h2>
		<PrimaryButton :callback="handlePlayAgain">Chơi lại</PrimaryButton>
	</div>
	<div v-else>
		<h2 class="result">Bạn đã thua</h2>
		<PrimaryButton :callback="handlePlayAgain">Chơi lại</PrimaryButton>
	</div>
</template>

<style scoped>
table {
	width: 300px;
	height: 300px;
	/* border: 2px solid #fff; */
	display: grid;
	grid-template-rows: 1fr 1fr 1fr;
}

tr {
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr;
}

tr:not(:last-of-type) {
	border-bottom: 0.2rem solid #fff;
}

td:not(:last-of-type) {
	border-right: 0.2rem solid #fff;
}

.statusbar {
	color: #fff;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1.5em;
}

.--red {
	--color: #e31b1b;
}

.--blue {
	--color: #164fde;
} 

.--active {
	box-shadow: 0 0 .2rem #fff,
							0 0 .2rem #fff,
							0 0 2rem var(--color),
							0 0 0.8rem var(--color),
							0 0 2.8rem var(--color),
							inset 0 0 1.3rem var(--color); 
}

.statusbar__item {
  border: 2px solid #fff;
  border-radius: 2rem;
  padding: 0.4em 1em;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-size: 2rem;
}

.result {
	color: #fff;
	margin-bottom: 1em;
}


</style>
