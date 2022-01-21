import Vue from 'vue'
import { deviceConfig } from './config/device'
import './styles/index.scss'
import './components'

Vue.config.productionTip = false
Vue.prototype.$device = deviceConfig

new Vue({
  render () {
    return (
      <div class="app">
        <div class="app-main">
          <app-main-pc />
        </div>
      </div>
    )
  }
}).$mount('#app')
