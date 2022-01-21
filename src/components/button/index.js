import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-button-enter',
  props: {
    text: {
      type: String,
      default: ''
    },

    theme: {
      type: String,
      default: 'default'
    }
  },
  render () {
    return (
      <a
        class={[
          style.btn,
          style[`btn-theme-${this.theme}`],
          this.$device.isTouce && style.isTouch
        ]}
        href="javascript:;"
      >{this.text}</a>
    )
  }
})
