import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import IconsResolver from 'unplugin-icons/resolver' //图标引入
import Icons from 'unplugin-icons/vite' //图标集
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons' // 雪碧图
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isBuild = command === 'build'
  const viteEnv = loadEnv(mode, process.cwd())
  const { VITE_TITLE, VITE_PUBLIC_PATH, VITE_PROXY_TARGET } = viteEnv
  return {
    base: VITE_PUBLIC_PATH || '/',
    plugins: [
      vue(),
      Unocss(),
      Icons({ autoInstall: true }),
      AutoImport({
        imports: ['vue', 'vue-router'],
      }),
      Components({
        resolvers: [NaiveUiResolver(), IconsResolver({ componentPrefix: 'icon' })],
        dts: false,
      }),
      createSvgIconsPlugin({
        // 指定需要缓存的图标文件夹
        iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
        // 指定symbolId格式
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__svg__icons__dom__',
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(process.cwd(), 'src'),
        '~': path.resolve(process.cwd()),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:4523/m1/480752-0-default', // 目标服务器地址
          changeOrigin: true, // 是否改变源
          rewrite: (path) => path.replace(/^\/api/, ''), // 重写路径
        },
      },
    },
  }
})
