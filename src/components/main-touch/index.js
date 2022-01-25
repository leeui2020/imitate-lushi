import Vue from 'vue'
import localLogo from '../main-pc/local-logo'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-main-touch',
  render () {
    return (
      <div class={style.main}>
        <div class={style.mainContainer}>
          <localLogo class={style.mainLogo} />
          <div class={style.mainActions}>
            <app-button-touch type={this.$device.os} />
          </div>
          <app-banner-touch style={style.mainBanner} />
        </div>
      </div>
    )
  }
})
