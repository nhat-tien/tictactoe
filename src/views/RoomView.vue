<script setup>
import generateId from '@/helpers/generateId';
import { useGameStateStore } from '@/stores/gameState';
import { watchEffect } from 'vue';
import { useRouter } from 'vue-router';

const gameState = useGameStateStore();
const router = useRouter();

const setRandomRoomId = () => {
	let randomRoomId = generateId(5);
	gameState.setRoomId(randomRoomId);
}

watchEffect(() => {
	if(gameState.ready) {
		router.push({ name: "play"});
	}
})

const joinRoom = () => {
  gameState.joinRoom(gameState.roomId);
}

</script>

<template>
	<input type="text" v-model="gameState.roomId"/>
	<button @click="joinRoom">Join room</button>
	<button @click="setRandomRoomId">Generate RoomID</button>
</template>
