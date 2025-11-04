<script setup>
import { defineProps } from 'vue';

defineProps({
    user:  Object
})
</script>

<template>
    <div class="Compo">
        <h2>Affichage</h2>
        <p><strong>Nom : </strong>{{ user.name }}</p>
        <p><strong>Âge : </strong>{{ user.age }}</p>
    </div>
</template>