import Vue from 'vue'
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.scss'
import style from './index.module.scss'

Swiper.use([Autoplay])

export default Vue.extend({
  name: 'app-banner',
  props: {
    total: Number,
    custom: {
      type: Object,
      default: () => ({})
    },
    swiperOptions: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {
      activeIndex: 0
    }
  },
  render () {
    const { custom } = this
    const vArr = Array(this.total).fill(0)
    const slides = vArr.map((v, index) => (
      <div class={['swiper-slide']}>{this.$scopedSlots.slide?.(index)}</div>
    ))

    const pagination = vArr.map((v, index) => (
      <a class={[
        style.bannerPaginationDot,
        custom.bannerPaginationDot,
        index === this.activeIndex && style.isActive
      ]} href="javascript:;" onClick={() => this.slideTo(index)}></a>
    ))

    return (
      <div class={[style.banner, custom.banner]}>
        <div class={['swiper', style.bannerSwiper, custom.bannerSwiper]}>
          <div class={['swiper-wrapper', style.bannerSlide, custom.bannerSlide]}>{slides}</div>
        </div>

        <div class={[style.bannerControl, custom.bannerControl]}>
          <div class={[style.bannerNavigate, custom.bannerNavigate]}>
            <a class={[style.bannerNavigatePrev]} href="javascript:;" onClick={() => this.swiper.slidePrev()}></a>
            <a class={[style.bannerNavigateNext]} href="javascript:;" onClick={() => this.swiper.slideNext()}></a>
          </div>

          {this.$scopedSlots.control?.({ swiper: this.swiper, activeIndex: this.activeIndex })}
          <div class={[style.bannerPagination, custom.bannerPagination]}>{pagination}</div>
        </div>
      </div>
    )
  },
  methods: {
    initSwiper () {
      const swiperEl = this.$el.querySelector('.swiper')
      const swiper = new Swiper(swiperEl, {
        loop: true,
        autoplay: {
          delay: 3000
        },
        ...this.swiperOptions
      })

      swiper.on('slideChange', ({ activeIndex }) => (
        this.setActiveIndex(activeIndex)
      ))

      this.$once('hook:beforeDestroy', () => swiper.destroy())
      this.setActiveIndex(swiper.activeIndex)
      this.swiper = swiper
    },

    setActiveIndex (index) {
      let activeIndex = index - 1
      if (activeIndex >= this.total) {
        activeIndex = 0
      }
      this.activeIndex = activeIndex
    },

    slideTo (index) {
      if (index !== this.activeIndex) {
        this.swiper.slideTo(index + 1)
      }
    }
  },
  mounted () {
    this.initSwiper()
  }
})
