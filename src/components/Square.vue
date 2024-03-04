<script setup>
const props = defineProps(['value','row','col']);

const handleMove = () => {
  console.log(props.row, props.col);
}

</script>
<template>
	<div class="square" @click="handleMove">
		{{ props.value }}
	</div>
</template>
<style scoped>
.square {
	border: 1px solid black;
	width: 20px;
	height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
