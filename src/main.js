import Vue from 'vue'
import { deviceConfig } from './config/device'

Vue.config.productionTip = false
Vue.prototype.$device = deviceConfig

new Vue({
  render () {
    return (
      <div>Hello</div>
    )
  }
}).$mount('#app')
