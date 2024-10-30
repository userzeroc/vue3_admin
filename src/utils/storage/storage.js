import { isNullOrUndef } from '@/utils'

class Storage {
  constructor(option) {
    this.storage = option.storage
    this.prefixKey = option.prefixKey
  }
  getKey(key) {
    return `${this.prefixKey}${key}`.toUpperCase()
  }
  set(key, value, expire) {
    const stringData = JSON.stringify({
      value,
      time: Date.now(),
      expire: !isNullOrUndef(expire) ? Date.now() + expire * 1000 : null,
    })
    this.storage.setItem(this.getKey(key), stringData)
  }
  getItem(key, def = null) {
    const val = this.storage.getItem(this.getKey(key))
    if (!val) return def
    try {
      const { value, time, expire } = JSON.parse(val)
      // 超时检测
      // if (isNullOrUndef(expire) || expire > Date.now()) {
      //   return { value, time }
      // }
      // this.remove(key)
      return { time, value }
    } catch (error) {
      this.remove(key)
      return def
    }
  }
  remove(key) {
    this.storage.removeItem(this.getKey(key))
  }

  clear() {
    this.storage.clear()
  }
}

export function createStorage(prefixKey = '', storage = sessionStorage) {
  return new Storage(prefixKey, sessionStorage)
}
