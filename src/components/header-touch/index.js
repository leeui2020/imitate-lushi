import Vue from 'vue'
import logo from '@/assets/images/logo-touch.png'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-header-touch',
  render () {
    return (
      <header class={style.header}>
        <img class={style.headerLogo} src={logo} />
        <app-button class={style.headerEnter} text="进入官网" />
      </header>
    )
  }
})
