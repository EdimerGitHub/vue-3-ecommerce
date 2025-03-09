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
    mounted() {
        
    }

}

</script>

<template>
    <h1>contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>
</template>