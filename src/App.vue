<script setup>
// import generateId from './helpers/generateId';
import { socket } from './socket';
import { useGameStateStore } from './stores/gameState';
import { RouterView } from 'vue-router';

const gameState = useGameStateStore();

socket.off();

gameState.bindEvents();

</script>

<template>
  <RouterView />
</template>

<style scoped>
</style>
