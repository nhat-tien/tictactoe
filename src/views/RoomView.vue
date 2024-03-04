<script setup>
import generateId from '@/helpers/generateId';
import { useGameStateStore } from '@/stores/gameState';
import { watch } from 'vue';

const gameState = useGameStateStore();

const setRandomRoomId = () => {
	let randomRoomId = generateId(5);
	gameState.setRoomId(randomRoomId);
}

watch

const joinRoom = () => {
  gameState.joinRoom(roomId.value)
}

</script>

<template>
	<input type="text" v-model="gameState.roomId"/>
	<button @click="joinRoom">Join room</button>
	<button @click="setRandomRoomId">Generate RoomID</button>
</template>
