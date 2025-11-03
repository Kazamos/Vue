<script setup>
const props = defineProps({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="friend-card">
        <h3>{{ name }}</h3>
        <p>ID : {{ id }}</p>
        <p>Phone : {{ phone }}</p>
        <p>Email : {{ email }}</p>
    </div>
</template>

<style scoped>
.friend-card {
    background-color: #111111;
    border: 1px solid #ccc;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 8px;
}
</style>