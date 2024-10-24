<template>
  <n-config-provider :theme-overrides="naiveThemeOverrides">
    <slot />
  </n-config-provider>
</template>

<script setup>
import { useCssVar } from '@vueuse/core'
import { kebabCase } from 'lodash-es'
import { naiveThemeOverrides } from '~/settings'

// 注册主题CSS变量到 document.documentElement
function setupCssVar() {
  const common = naiveThemeOverrides.common
  for (const key in common) {
    useCssVar(`--${kebabCase(key)}`, document.documentElement).value = common[key] || ''
    if (key === 'primaryColor') window.localStorage.setItem('__THEME_COLOR__', common[key] || '')
  }
}
setupCssVar()
</script>
