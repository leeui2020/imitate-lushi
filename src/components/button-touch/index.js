import Vue from 'vue'
import style from './index.module.scss'

const typeImgs = {
  ios: require('@/assets/images/btn-app-store.png'),
  android: require('@/assets/images/btn-android.png'),
  windows: require('@/assets/images/btn-pc.png'),
  mac: require('@/assets/images/btn-mac.png')
}

export default Vue.extend({
  name: 'app-button-touch',
  props: {
    type: String
  },
  render () {
    return (
      <a class={style.button} href="javascript:;">
        <img src={typeImgs[this.type || 'android']} />
      </a>
    )
  }
})
