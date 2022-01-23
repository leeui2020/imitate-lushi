import Vue from 'vue'
import style from './index.module.scss'

const icons = [
  require('@/assets/images/zx110.png'),
  require('@/assets/images/sgs-icon.png'),
  require('@/assets/images/icon-email.png')
]

export default Vue.extend({
  name: 'app-footer-info',
  render () {
    const ul = ['隐私', '法律条款', 'API'].map((text) => (
      <li>
        <a href="javascript:;">{text}</a>
      </li>
    ))

    const iconNodes = icons.map((src) => (
      <a class={style.icon} href="javascript:;">
        <img src={src} />
      </a>
    ))

    return (
      <div class={style.info}>
        <div class={style.infoLogos}>
          <app-logo type="bz" />
          <app-logo type="ne" />
        </div>

        <div class={style.infoText}>
          <ul>{ul}</ul>
          <p>
            <span>©2022 暴雪娱乐有限公司版权所有 </span>
            <span>由上海网之易网络科技发展有限公司运营 </span>
            <a href="javascript:;">著作权侵权</a>
            <span> | 新出审字[2013]1510号</span>
          </p>

          <p>
            <a href="javascript:;">文网进字[2013]029号</a>
            <span> | </span>
            <a href="javascript:;">沪网文号〔2017〕9633-727号</a>
            <span> | </span>
            <a href="javascript:;">增值电信业务经营许可证编号：沪B2－20080012</a>
            <span> | </span>
            <a href="javascript:;">沪ICP备：沪B2－20080012－15</a>
          </p>

          <p>
            <span>互联网违法和不良信息举报电话：0571-28090163 沪公网安备 31011502022167号 | </span>
            <a href="javascript:;">上海市网络游戏行业自律公约</a>
          </p>

          <p>
            {iconNodes}
            <span> | 适龄提示：适合13岁及以上使用 </span>
            <a href="javascript:;">家长监护工程</a>
            <span> | </span>
            <a href="javascript:;">网上有害信息专区</a>
          </p>
        </div>
      </div>
    )
  }
})
