<template>
  <n-layout has-sider style="height: 100%">
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="220">
      <Sidebar />
    </n-layout-sider>
    <n-layout>
      <n-layout-header>颐和园路</n-layout-header>
      <n-layout-content>平山道</n-layout-content>
      <n-layout-footer>
        <app-main />
      </n-layout-footer>
    </n-layout>
  </n-layout>
</template>

<script setup>
import AppMain from './components/AppMain.vue'
import Sidebar from './components/sidebar/index.vue'
</script>
