import Vue from 'vue'
import localLogo from '../main-pc/local-logo'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-main-touch',
  render () {
    return (
      <div class={style.main}>
        <app-header-touch />
        <div class={style.mainContainer}>
          <localLogo class={style.mainLogo} />
          <div class={style.mainActions}>
            <app-button-touch type={this.$device.os} />
          </div>
          <app-banner-touch class={style.mainBanner} />
        </div>
      </div>
    )
  }
})
