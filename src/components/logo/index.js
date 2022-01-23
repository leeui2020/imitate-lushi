import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-logo',
  props: {
    type: String
  },
  render () {
    return (
      <a class={[style.logo, style[`logoType-${this.type}`]]} href="javascript:;"></a>
    )
  }
})
