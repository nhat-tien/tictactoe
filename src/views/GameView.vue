<script setup>
import Square from '@/components/Square.vue';
import BackButton from '@/components/BackButton.vue';
import { useGameStateStore } from '@/stores/gameState'; 

const gameState = useGameStateStore();

</script>

<template>
	<div v-if="!gameState.isEnd">
		<div class="status-bar">
			<h2>Bạn là {{ gameState.player }}</h2>
			<h3>Lượt của: {{ gameState.turn }}</h3>
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
		<h2>Hòa</h2>
		<BackButton />
	</div>
	<div v-else-if="gameState.winner === gameState.player">
    <h2>Bạn đã thắng</h2>
		<BackButton />
	</div>
	<div v-else>
		<h2>Bạn đã thua</h2>
		<BackButton />
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

.status-bar {
	color: #fff;
}

</style>
