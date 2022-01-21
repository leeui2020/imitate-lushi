import Vue from 'vue'
import { bannerData } from '../../config/banner'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-banner-pc',
  render () {
    const slide = (scope) => (
      <a class={style.contentItem} href="javascript:;">
        <img src={scope.img} />
      </a>
    )

    const defaultSlot = (scope) => (
      <div class={style.contentTitle}>{scope.currentItem?.title}</div>
    )

    return (
      <div class={style.content}>
        <app-banner class={style.contentBanner} data={bannerData} scopedSlots={{ slide, default: defaultSlot }} />
      </div>
    )
  }
})
