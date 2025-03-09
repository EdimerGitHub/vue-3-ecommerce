<script setup>
    import {ref} from 'vue'
    const count = ref(0);
    function increase (){
        count.value +=1;
    }

</script>


<template>
    <h1>Version compositions</h1>
    <h1>contador: {{ count }}</h1>
    <button @click="increase">Aumentar</button>
</template>