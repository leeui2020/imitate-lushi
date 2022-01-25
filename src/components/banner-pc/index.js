import Vue from 'vue'
import { bannerData } from '../../config/banner'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-banner-pc',
  render () {
    const slide = (index) => (
      <a class={style.item} href="javascript:;">
        <img src={bannerData[index].img} />
      </a>
    )

    const control = ({ activeIndex }) => (
      <div class={style.bannerTitle}>{bannerData[activeIndex].title}</div>
    )

    return (
      <app-banner custom={style} total={bannerData.length} scopedSlots={{ slide, control }} />
    )
  }
})
