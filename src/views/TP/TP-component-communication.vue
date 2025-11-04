<script setup>
import { ref } from 'vue'
import UserActive from '../../components/tp-UserActive.vue'
import UserData from '../../components/tp-UserData.vue'

const user = ref({name: 'John', age: '25'})

function update(Data) {
    user.value = Data
}
</script>

<template>
    <div>
        <h1 class="mb-10">TP/Eval Communication des composants</h1>
        <UserActive :user="user" />
        <UserData @updateEmit="update" />
    </div>
</template>

<style>

.CompoBtn {
    background-color: rgb(119, 87, 7);
}

.Compo {
    background-color: rgb(54, 54, 54);
    margin: 3rem;
    border-width: 0.25rem;
    border-color: aliceblue;
    border-radius: 3px;
    padding: 1rem 0 2rem 0;
}

h2 {
    font-size: xx-large;
    margin-bottom: 2rem;
}

input {
    padding: 0.5rem;
    margin-right: 2rem;
    border-width: 0.10rem;
    border-color: aliceblue;
    border-radius: 3px;
}

</style>