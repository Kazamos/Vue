<template>
    <div class="profil-card">
        <h2>Tp-Databinding : User-profile Card with Text Interpolation & v-bind Composition</h2>
        <img :src="imageUrl" alt="Photo de profil" class="profil-img" />
        <h3>{{ nom }}</h3>
        <input type="text" :value="nom" />
        <p>Âge : <span class="badge bleu">{{ age }} ans</span></p>
        <p>Âge + 10 : <span class="badge rose">{{ agePlusDix() }} ans</span></p>
        <p>NB Fétiche : <span class="badge vert">{{ nombreFetiche() }}</span></p>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const nom = ref('Dr Mario')
const age = ref(30)
const imageUrl = ref('https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg')

function agePlusDix() {
    return age.value + 10
}

function nombreFetiche() {
    return Math.floor(Math.random() * 1000)
}
</script>

<style scoped>
.profil-card {
    max-width: 800px;
    text-align: center;
    padding: 1.5rem;
    border-radius: 15px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.profil-img {
    display: block;
    margin: 0 auto 10px auto;
    width: 150;
    height: auto;
    border-radius: 50%;
    border: 3px solid #4f46e5;
    margin-bottom: 10px;
}

.badge {
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    font-weight: bold;
}

.bleu {
    background-color: #3b82f6;
}

.rose {
    background-color: #ec4899;
}

.vert {
    background-color: #10b981;
}
</style>