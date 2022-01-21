import Vue from 'vue'
import logoImg from '@/assets/images/logo.png'
import style from './index.module.scss'

export default Vue.extend({
  name: 'local-logo',
  render () {
    return (
      <a class={style.logo} href="javascript:;">
        <img class={style.logoImg} src={logoImg} />
      </a>
    )
  }
})
