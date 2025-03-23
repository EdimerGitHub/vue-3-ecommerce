<script lang="ts">
export default {
    data() {
        return{
            count: 0
        }
    },
    methods: {
        increase () {
            this.count += 1
        }
    },
}
</script>

<template>
    <p>la meta es llegar a 20</p>
    <h1>contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>
    <p v-if="count <= 10 ">vamo tu puedes!</p>
    <p v-else>ya te falta poco....!</p>
</template>