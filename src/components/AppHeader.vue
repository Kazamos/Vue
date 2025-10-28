<script setup>

</script>

<template>
  <header class="fixed top-0 left-0 w-full">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

      <div class="flex items-center space-x-2">
        <h1><RouterLink to="/home" class="hover:text-blue-600 transition">MonApp</RouterLink></h1>
      </div>

      <nav class="hidden md:flex space-x-6">
        <RouterLink to="/textinterpolation" class="hover:text-blue-600 transition">TextInterpolation</RouterLink>
        <RouterLink to="/inline" class="hover:text-blue-600 transition">InlineTemplating</RouterLink>
        <RouterLink to="/about" class="hover:text-blue-600 transition">À propos</RouterLink>
        <RouterLink to="/lessons" class="hover:text-blue-600 transition">Lessons</RouterLink>
        <RouterLink to="/exercices" class="hover:text-blue-600 transition">Exercices</RouterLink>
        <RouterLink to="/tp" class="hover:text-blue-600 transition">TP</RouterLink>
        <RouterLink to="/contact" class="hover:text-blue-600 transition">Contact</RouterLink>
        <RouterLink to="/login" class="hover:text-blue-600 transition">Login</RouterLink>
        <RouterLink to="/profile" class="hover:text-blue-600 transition">Profile</RouterLink>
        <RouterLink to="/skills" class="hover:text-blue-600 transition">Skills</RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  backdrop-filter: blur(8px);
}
</style>