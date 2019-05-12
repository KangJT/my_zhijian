
import SvgIcon from '@/components/svgIcon'
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('@/assets/icons', false, /\.svg$/)
requireAll(req)
console.log(requireAll(req))
export default {
  install (Vue) {
    Vue.component('svg-icon', SvgIcon)
  }
}
