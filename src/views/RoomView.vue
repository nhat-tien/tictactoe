<script setup>
import generateId from '@/helpers/generateId';
import { useGameStateStore } from '@/stores/gameState';
import { watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';
import Loading from '@/components/Loading.vue';

const isWaiting = ref(false)
const gameState = useGameStateStore();
const router = useRouter();

watchEffect(() => {
	if(gameState.ready) {
		router.push({ name: "play"});
	}
})

const makeNewRoom = () => {
	let randomRoomId = generateId(5);
	isWaiting.value = true;
	gameState.setRoomId(randomRoomId);
	gameState.joinRoom();
}

const joinRoom = () => {
	isWaiting.value = true
  gameState.joinRoom();
}

</script>

<template>
	<div v-if="isWaiting">
		<h2>Mã Phòng: {{ gameState.roomId }} </h2>
		<Loading />
	</div>
	<div v-else>
		<input type="text" v-model="gameState.roomId"/>
		<button @click="joinRoom">Join room</button>
		<button @click="makeNewRoom">New Room</button>
	</div>
</template>
