import Vue from 'vue'
import qrcode from '@/assets/images/qrcode.png'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-download',
  render () {
    return (
      <div class={style.content}>
        <p>扫码下载游戏</p>
        <img src={qrcode} />
        <app-button theme="download-pc" text="PC版下载" />
        <app-button theme="download-mac" text="MAC版下载" />
      </div>
    )
  }
})
