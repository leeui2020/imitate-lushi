import Vue from 'vue'
import Swiper from 'swiper'
import 'swiper/swiper.scss'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-banner',
  props: {
    data: Array
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  render () {
    const slides = this.data.map((item) => (
      <div class={['swiper-slide']}>{this.$scopedSlots.slide?.(item)}</div>
    ))

    const dots = this.data.map((item, index) => (
      <a
        class={[style.paginationDot, index === this.currentIndex && style.active]}
        href="javascript:;"
        onClick={() => this.slideTo(index)}
      ></a>
    ))

    return (
      <div class={style.container}>
        <div class={['swiper']}>
          <div class={['swiper-wrapper']}>{slides}</div>
        </div>

        <div class={style.navigation}>
          <a
            class={style.navigationPrev}
            href="javascript:;"
            onClick={() => this.swiper?.slidePrev()}
          ></a>

          <a
            class={style.navigationNext}
            href="javascript:;"
            onClick={() => this.swiper?.slideNext()}
          ></a>
        </div>

        {this.$scopedSlots.default?.({
          currentIndex: this.currentIndex,
          currentItem: this.data[this.currentIndex]
        })}
        <div class={style.pagination}>{dots}</div>
      </div>
    )
  },
  methods: {
    initSwiper () {
      const el = this.$el.querySelector('.swiper')

      const swiper = new Swiper(el, {
        direction: 'horizontal',
        loop: true,
        autoplay: true
      })

      const setIndex = () => {
        let index = swiper.activeIndex - 1
        if (index < 0) {
          index = this.data.length - 1
        } else if (index >= this.data.length) {
          index = 0
        }
        this.currentIndex = index
      }

      swiper.on('slideChange', setIndex)

      setIndex()
      this.swiper = swiper
    },

    slideTo (index) {
      if (index !== this.currentIndex) {
        this.swiper.slideTo(index + 1)
      }
    }
  },
  mounted () {
    this.initSwiper()
    this.$once('hook:beforeDestroy', () => {
      this.swiper.destroy()
    })
  }
})
