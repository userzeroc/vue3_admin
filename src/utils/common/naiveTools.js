import * as NaiveUI from 'naive-ui'
import { naiveThemeOverrides as themeOverrides } from '~/settings'

export function setupNaiveDiscreteApi() {
  const configProviderProps = computed(() => ({
    theme: undefined,
    themeOverrides,
  }))
  const { message, notification, dialog, loadingBar, modal } = NaiveUI.createDiscreteApi(
    ['message', 'dialog', 'notification', 'loadingBar', 'modal'],
    {
      configProviderProps: configProviderProps,
    }
  )
  window.$loadingBar = loadingBar
  window.$notification = notification
  window.$message = message
  window.$dialog = dialog
  window.$modal = modal
}
