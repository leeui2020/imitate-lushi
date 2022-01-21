import Vue from 'vue'
import img from '@/assets/images/register-normal.png'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-register',
  render () {
    return (
      <div class={style.content}>
        <img class={style.contentImg} src={img} />
        <app-button class={style.contentBtn} theme="register" text="注册账号" />
      </div>
    )
  }
})
