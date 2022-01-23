import Vue from 'vue'
import style from './index.module.scss'

export default Vue.extend({
  name: 'app-footer',
  render () {
    return (
      <footer class={style.footer}>
        <div class={style.footerWrapper}>
          <div class={style.footerInner}>
            <div class={style.footerBusiness}>
              <div class={style.footerBusinessLeft}>
                <app-button-icon icon="question" text="在线客服" />
                <app-button-icon icon="feedback" text="反馈" />
                <app-button-icon icon="join" text="加入我们" />
              </div>

              <div class={style.footerBusinessRight}>
                <div class={style.footerBusinessBrand}>
                  <span>合作品牌：</span>
                  <app-brand-item type="nvidia" />
                  <span class={style.footerSplit}></span>
                  <app-popover-medias />
                </div>
              </div>
            </div>

            <app-footer-info class={style.footerInfo} />

            <div class={style.footerTip}>
              <p>健康游戏忠告：抵制不良游戏，拒绝盗版游戏。注意自我保护，谨防受骗上当。适度游戏益脑，沉迷游戏伤身。合理安排时间，享受健康生活。</p>
            </div>
          </div>
        </div>
      </footer>
    )
  }
})
