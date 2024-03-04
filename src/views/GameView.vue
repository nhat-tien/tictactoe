<script setup>
import Square from '@/components/Square.vue';
import { useGameStateStore } from '@/stores/gameState'; 

const gameState = useGameStateStore();

</script>

<template>
	<table>
		<tr v-for="(rowLine, indexRow ) in gameState.board">
			<td v-for="(cell, indexCol) in rowLine">
				<Square :value="cell" :row="indexRow" :col="indexCol"/>
      </td>
		</tr>
	</table>
</template>
