<script setup>
const props = defineProps(['callback'])

</script>

<template>
	<button class="primary-btn" @click="props.callback" >
		<slot />
	</button>
</template>

<style scoped>
.primary-btn {
  border: 0.2rem solid #fff;
  border-radius: 2rem;
  padding: 0.4em 2em;
  box-shadow: 0 0 .2rem #fff,
            0 0 .2rem #fff,
            0 0 2rem #bc13fe,
            0 0 0.8rem #bc13fe,
            0 0 2.8rem #bc13fe,
            inset 0 0 1.3rem #bc13fe; 
	background-color: transparent;
	color: #fff;
	font-size: 1.5em;
	font-family: inherit;
	transition: all .1s ease-in;
}

.primary-btn:hover {

  box-shadow: 0 0 .5rem #fff,
            0 0 .5rem #fff,
            0 0 5rem #bc13fe,
            0 0 1.1rem #bc13fe,
            0 0 3.1rem #bc13fe,
            inset 0 0 1.7rem #bc13fe; 
}

@media (max-width: 500px) {
  .primary-btn {
		font-size: 1rem;
	}	
}
</style>
