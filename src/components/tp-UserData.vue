<script setup>
import { ref, defineEmits } from 'vue'


const name = ref('')
const age = ref(null)

const emits = defineEmits(['updateEmit'])

const counter = ref(0)

function sendData() {

    let taunt = ["T'as pas oublié un truc?", 'Hey! faut que tu marque un truc.', 'Les données, billy!!', "Mais c'est pas possible, il le fait exprès!", "MEC. MARQUE. TES. DONNEES. AVANT. D'ENVOYER!", 'Et puis merde...', '...']

    if (name.value!=='' && age.value!==null){
        emits('updateEmit', {
            name: name.value,
            age: age.value
        })
    }

    else {
        alert(taunt[counter.value])
        if (counter.value<6){
            counter.value++
        }
    }

    name.value = ''
    age.value = null
}
</script>

<template>
    <div class="Compo">
        <h2>Formulaire</h2>
        <form @submit.prevent="sendData">
            <input v-model="name" type="text" placeholder="Nom">
            <input v-model="age" type="text" placeholder="Âge">
            <button class="CompoBtn">Envoyer les données</button>
        </form>
    </div>
</template>