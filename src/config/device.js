import Vue from 'vue'
import MobileDetect from 'mobile-detect'

export const SCREEN_WIDTH_SPLIT = 768

export const osMap = {
  ios: ['iOS'],
  android: ['AndroidOS'],
  windows: ['WindowsMobileOS', 'WindowsPhoneOS'],
  mac: ['iPadOS']
}

export const deviceConfig = Vue.observable({
  isPC: false,
  isTouch: false,
  os: null
})

export function checkPcOrTouch () {
  const { innerWidth } = window
  const isPC = innerWidth > SCREEN_WIDTH_SPLIT
  const isTouch = innerWidth <= SCREEN_WIDTH_SPLIT
  return { isPC, isTouch }
}

export function checkMobileOs () {
  const md = new MobileDetect(window.navigator.userAgent)
  const os = md.os()
  return Object.keys(osMap).find((key) => osMap[key].includes(os)) || null
}

export function updateDeviceConfig () {
  Object.assign(deviceConfig, checkPcOrTouch())
  deviceConfig.os = checkMobileOs()
}

window.addEventListener('resize', updateDeviceConfig)
window.addEventListener('orientationchange', updateDeviceConfig)

updateDeviceConfig()
