import Vue from 'vue'
import { medias } from '../../config/medias'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-popover-medias',
  render () {
    const mediasNode = medias.map((item) => (
      <a class={style.media} href={item.link}>
        <span>{item.title}</span>
      </a>
    ))

    return (
      <app-popover text="合作媒体">
        <div class={style.medias}>
          {mediasNode}
          <a class={style.applyButton} href="javascript:;">
            <span>申请合作</span>
          </a>
        </div>
      </app-popover>
    )
  }
})
