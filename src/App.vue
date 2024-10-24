<template>
  <!-- <RouterLink to="/login">Go to Login</RouterLink> -->

  <!-- <RouterLink to="/">Go to Work</RouterLink> -->
  <AppProvider>
    <router-view></router-view>
  </AppProvider>
</template>

<script setup>
import AppProvider from '@/components/common/AppProvider.vue'
</script>

<style scoped></style>
