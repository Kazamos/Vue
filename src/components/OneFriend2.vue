<script setup>
import { ref } from 'vue'

const props = defineProps({
    id: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    premium: { type: Boolean, default: false }
})

const emit = defineEmits(['mon-event-premium-update'])

const showDetails = ref(false)
const unAmiPremium = ref(props.premium)

const toggleDetails = () => {
    showDetails.value = !showDetails.value
}

const updatePremium = () => {
    unAmiPremium.value = !unAmiPremium.value
    emit('mon-event-premium-update', props.id)
}
</script>

<template>
    <div class="friend-card">
        <h3>{{ name }}</h3>

        <p>
            <span class="badge" :class="unAmiPremium ? 'premium-badge' : 'standard-badge'">
                {{ unAmiPremium ? 'Ami en or' : 'Ami en Plomb' }}
            </span>
        </p>

        <div v-if="showDetails" class="details">
            <p>Téléphone : {{ phone }}</p>
            <p>Email : {{ email }}</p>
        </div>

        <div class="actions">
            <button class="btn" @click="updatePremium">
                {{ unAmiPremium ? 'Rétrograder' : 'Promouvoir' }}
            </button>
            <button class="btn" @click="toggleDetails">
                {{ showDetails ? 'Masquer Détails' : 'Afficher Détails' }}
            </button>
        </div>
    </div>
</template>

<style scoped>

.friend-card {
    background-color: lightgrey;
    color: black;
    padding: 16px;
    margin: 16px;
    border-radius: 20px;
}

.btn {
    background-color: rgb(0, 146, 146);
    margin: 5px;
}

.premium-badge {
    background-color: gold;
    color: black;
}

</style>