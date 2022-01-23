import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-brand-item',
  props: {
    type: String
  },
  render () {
    return (
      <div class={[style.brand, style[`brandType-${this.type}`]]}>
        <a class={style.brandLogo} href="javascript:;"></a>
        <a class={style.brandEmail} href="javascript:;">
          <span class="icon-add"></span>
        </a>
      </div>
    )
  }
})
