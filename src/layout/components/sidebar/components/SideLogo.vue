<template>
  <router-link h-60 f-c-c to="/">
    <img src="@/assets/vue.svg" height="42" />
    <h2 ml-10 max-w-140 flex-shrink-0 text-16 font-bold color-primary v-if="!appStore.collapsed">
      AdminSystem
    </h2>
  </router-link>
</template>

<script setup>
import { useAppStore } from '@/store'
const appStore = useAppStore()
</script>
