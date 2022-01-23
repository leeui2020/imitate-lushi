import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-popover',
  props: {
    text: String
  },
  data () {
    return {
      isOpen: false
    }
  },
  render () {
    return (
      <div class={[style.popover, this.isOpen && style.isOpen]}>
        <div class={style.popoverTrigger}>
          <span class={style.popoverTriggerText}>{this.text}</span>
          <a
            href="javascript:;"
            class={[style.popoverTriggerIcon, 'icon-arrow-down']}
            onClick={() => this.toggleOpen()}
          ></a>
        </div>

        <div class={style.popoverContent}>
          <div class={style.popoverContentInner}>{this.$slots.default}</div>
        </div>
      </div>
    )
  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
    }
  }
})
