import Vue from 'vue'
import { bannerData } from '../../config/banner'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-banner-touch',
  render () {
    const slide = (index) => (
      <div class={style.item}>
        <a class={style.itemImg} href="javascript:;">
          <img src={bannerData[index].img} />
        </a>
        <a class={style.itemTitle} href="javascript:;">
          <span>{bannerData[index].title}</span>
        </a>
      </div>
    )

    return (
      <app-banner
        custom={style}
        total={bannerData.length}
        scopedSlots={{ slide }}
        swiperOptions={{
          spaceBetween: 10,
          centeredSlides: true
        }} />
    )
  }
})
