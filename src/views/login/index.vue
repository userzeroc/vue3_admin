<template>
  <AppPage showFooter :style="{ backgroundImage: `url(${bgImg})` }">
    <div
      style="transform: translateY(25px)"
      class="m-auto max-w-700 min-w-345 f-c-c rounded-10 bg-white bg-opacity-60 p-15 card-shadow"
      dark:bg-dark
    >
      <div hidden w-380 px-20 py-35 md:block>
        <img src="@/assets/images/login_banner.webp" w-full alt="login_banner" />
      </div>
      <div w-320 flex-col px-20 py35 md:block>
        <h5 f-c-c text-24 font-normal color="#6a6a6a">
          <img src="@/assets/images/logo.png" height="50" class="mr-10" />
          Naive-Admin
        </h5>
        <div mt-20>
          <n-input
            v-model:value="loginInfo.name"
            autofocus
            class="h-48 items-center text-16"
            placeholder="name"
            :maxlength="20"
          >
            <template #prefix>
              <n-icon :size="20" class="mr-8 text-20 opacity-40">
                <icon-material-symbols:account-circle-outline />
              </n-icon>
            </template>
          </n-input>
        </div>
        <div mt-20>
          <n-input
            v-model:value="loginInfo.password"
            autofocus
            type="password"
            show-password-on="mousedown"
            class="h-48 items-center text-16"
            placeholder="password"
            :maxlength="20"
          >
            <template #prefix>
              <n-icon :size="20" class="text-20 opacity-40">
                <icon-ri:lock-password-line />
              </n-icon>
            </template>
          </n-input>
        </div>
        <div mt-20>
          <n-button
            h-50
            w-full
            rounded-5
            text-16
            type="primary"
            :loading="loading"
            @click="handleLogin"
          >
            登录
          </n-button>
        </div>
      </div>
    </div>
  </AppPage>
</template>

<script setup>
import bgImg from '@/assets/images/login_bg.webp'
import api from './api'
const router = useRouter()
const loginInfo = ref({
  name: '',
  password: '',
})
const loading = ref(false)
async function handleLogin() {
  api.login({ a: 1 })
  // router.push('/')
}
</script>
