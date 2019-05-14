import FooterNav from './Footer/index'
import Swiper from './swipers/index'
import ArtileList from './artileList/index'
import NutButton from './Buttons/index'
import NutIcon from './icon/index.vue'
import {Tabs, TabPane} from './tabbar/index'
import {List, ListItem} from './list/index.js'
import Sticky from './sticky/index.vue'
import SvgIcon from './SvgIcon/index.vue'
import addTitle from './ptitle/index.vue'
import ShopName from './ShopName/index.vue'
const Components = {
  FooterNav,
  Swiper,
  ArtileList,
  NutButton,
  NutIcon,
  Tabs,
  TabPane,
  Sticky,
  SvgIcon,
  addTitle,
  ShopName,
  List,
  ListItem
}
export default {
  install (Vue) {
    for (let i in Components) {
      Vue.component(i, Components[i])
    }
  }
}
