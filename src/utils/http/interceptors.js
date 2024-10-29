import { resolveResError } from './helpers'

export function reqResolve(config) {
  if (config.noNeedToken) {
    return config
  }
  const token = '1abc'
  if (!token) {
    return Promise.reject({ code: 401, message: '登录已过期，请重新登录！' })
  }
  config.headers.Authorization = config.headers.Authorization || 'Bearer ' + token

  return config
}
export function reqReject(error) {
  return Promise.reject(error)
}

export function resResolve(response) {
  const { data, status, config, statusText } = response
  if (data?.code !== 0) {
    const code = data?.code ?? status
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, data?.message ?? statusText)

    /** 需要错误提醒 */
    !config.noNeedTip && window.$message?.error(message)
    return Promise.reject({ code, message, error: data || response })
  }
  return Promise.resolve(data)
}
export function resReject(error) {
  if (!error || !error.response) {
    const code = error?.code
    /** 根据code处理对应的操作，并返回处理后的message */
    const message = resolveResError(code, error.message)
    // window.$message?.error(message)
    console.log(message)
    return Promise.reject({ code, message, error })
  }
  const { data, status, config } = error.response
  const code = data?.code ?? status
  const message = resolveResError(code, data?.message ?? error.message)
  console.log(message)
  /** 需要错误提醒 */
  // !config?.noNeedTip && window.$message?.error(message)
  return Promise.reject({ code, message, error: error.response?.data || error.response })
}
