<template>
  <footer class="fixed bottom-0 bg-[#2e2e2e] left-0 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between h-16 text-sm">
      
      <!-- Texte / copyright -->
      <div class="flex items-center space-x-2">
        <p>© 2025 MonApp. Tous droits réservés.</p>
      </div>

      <!-- Navigation secondaire -->
      <nav class="hidden md:flex space-x-6">
        <RouterLink to="/" class="hover:text-blue-600 transition">Confidentialité</RouterLink>
        <RouterLink to="/" class="hover:text-blue-600 transition">Conditions</RouterLink>
        <RouterLink to="/" class="hover:text-blue-600 transition">Support</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
footer {
  backdrop-filter: blur(8px);
}
</style>