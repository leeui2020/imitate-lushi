import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-button-icon',
  props: {
    icon: String,
    text: String
  },
  render () {
    return (
      <a class={style.btn} href="javascript:;">
        <span class={[style.btnIcon, style[`btnIcon-${this.icon}`]]}></span>
        <span class={style.btnText}>{this.text}</span>
      </a>
    )
  }
})
