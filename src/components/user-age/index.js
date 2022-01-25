import Vue from 'vue'
import img from '@/assets/images/cadpa12.png'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-user-age',
  render () {
    return (
      <div class={style.age}>
        <img class={style.ageImg} src={img} />
      </div>
    )
  }
})
