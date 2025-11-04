<script setup>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue'
</script>

<template>
    <div class="flex flex-col min-h-screen bg-[#2e2e2e] text-white">
        <AppHeader />
        <main class="flex-grow pt-20 pb-16"> 
            <RouterView />
        </main>
        <AppFooter />
    </div>
</template>

<style scoped>

</style>
