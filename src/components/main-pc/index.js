import Vue from 'vue'
import LocalLogo from './local-logo'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-main-pc',
  render () {
    return (
      <div class={style.main}>
        <div class={style.mainInner}>
          <LocalLogo />
          <app-button class={style.mainEnter} text="进入官网" />
          <div class={style.mainContainer}>
            <app-register class={style.mainRegister} />
            <app-download class={style.mainDownload} />
          </div>
        </div>
      </div>
    )
  }
})
