<script setup>
import { socket } from './socket';
import generateId from '@/helpers/generateId';
import { useGameStateStore } from '@/stores/gameState';
import { watchEffect, ref } from 'vue';
import { useRouter } from 'vue-router';
import Loading from '@/components/Loading.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

const isWaiting = ref(false)
const gameState = useGameStateStore();
const router = useRouter();

socket.off();

gameState.bindEvents();

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
	<div class="room-container" v-if="isWaiting">
		<h2 class="room-label">Mã Phòng: {{ gameState.roomId }} </h2>
		<Loading />
	</div>
	<div class="room-container" v-else>
		<input class="roomIdInput" type="text" @keyup.enter="joinRoom" v-model="gameState.roomId"/>
		<PrimaryButton :callback="joinRoom" >Join Room</PrimaryButton>
		<PrimaryButton :callback="makeNewRoom">New Room</PrimaryButton>
	</div>
</template>

<style scoped>
.room-container {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 2em;
}

.roomIdInput {
	font-size: 2rem;
	padding-left: 0.8em;
	border-radius: 20px;
	width: 100%;
}

.room-label {
	color: #fff;
}

@media (max-width: 500px) {
  .room-container {
		width: 70%;
	}	
}
</style>
