<script setup>
const props = defineProps(['callback'])

</script>

<template>
	<button class="primary-btn" @click="props.callback" >
		<slot />
	</button>
</template>

<style scoped>
/* .primary-btn { */
/*   animation: pulsate 1.5s infinite alternate;   */
/*   border: 0.2rem solid #fff; */
/*   border-radius: 2rem; */
/*   padding: 0.4em 2em; */
/*   box-shadow: 0 0 .2rem #fff, */
/*             0 0 .2rem #fff, */
/*             0 0 2rem #bc13fe, */
/*             0 0 0.8rem #bc13fe, */
/*             0 0 2.8rem #bc13fe, */
/*             inset 0 0 1.3rem #bc13fe;  */
/* 	background-color: transparent; */
/* 	color: #fff; */
/* 	font-size: 1.5em; */
/* 	font-family: inherit; */
/* 	transition: all .1s ease-in; */
/* } */
/**/
/* @keyframes pulsate { */
/*      */
/*   100% { */
/**/
/*       text-shadow: */
/*       0 0 4px #fff, */
/*       0 0 11px #fff, */
/*       0 0 19px #fff, */
/*       0 0 40px #bc13fe, */
/*       0 0 80px #bc13fe, */
/*       0 0 90px #bc13fe, */
/*       0 0 100px #bc13fe, */
/*       0 0 150px #bc13fe; */
/*    */
/*   } */
/*    */
/*   0% { */
/**/
/*     text-shadow: */
/*     0 0 2px #fff, */
/*     0 0 4px #fff, */
/*     0 0 6px #fff, */
/*     0 0 10px #bc13fe, */
/*     0 0 45px #bc13fe, */
/*     0 0 55px #bc13fe, */
/*     0 0 70px #bc13fe, */
/*     0 0 80px #bc13fe; */
/*   } */
/* } */
/* .primary-btn:hover { */
/**/
/*   box-shadow: 0 0 .5rem #fff, */
/*             0 0 .5rem #fff, */
/*             0 0 5rem #bc13fe, */
/*             0 0 1.1rem #bc13fe, */
/*             0 0 3.1rem #bc13fe, */
/*             inset 0 0 1.7rem #bc13fe;  */
/* } */
/**/
/* @media (max-width: 500px) { */
/*   .primary-btn { */
/* 		font-size: 1rem; */
/* 	}	 */
/* } */
</style>
