<script setup>
import { ref } from 'vue'

const props = defineProps({
  id: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  premium: { type: Boolean, default: false }
})

const emit = defineEmits(['mon-event-premium-update', 'delete-friend'])

const showDetails = ref(false)

const toggleDetails = () => {
  showDetails.value = !showDetails.value
}

const updatePremium = () => {
  emit('mon-event-premium-update', props.id)
}

const deleteFriend = () => {
  emit('delete-friend', props.id)
}
</script>

<template>
  <div class="friend-card">
    <h3>{{ name }}</h3>

    <p>
      <span class="badge" :class="premium ? 'premium-badge' : 'standard-badge'">
        {{ premium ? 'Ami en or' : 'Ami en plomb' }}
      </span>
    </p>

    <div v-if="showDetails" class="details">
      <p>Téléphone : {{ phone }}</p>
      <p>Email : {{ email }}</p>
    </div>

    <div class="actions">
      <button class="btn" @click="updatePremium">
        {{ premium ? 'Rétrograder' : 'Promouvoir' }}
      </button>
      <button class="btn" @click="toggleDetails">
        {{ showDetails ? 'Masquer Détails' : 'Afficher Détails' }}
      </button>
      <button class="btn" @click="deleteFriend">
        Supprimer
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
  color: aliceblue;
}

.premium-badge {
  background-color: gold;
  color: black;
}
.standard-badge {
  background-color: silver;
  color: black;
}
</style>