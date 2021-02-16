import { SHOW_MORE_TAB, HIDE_TAB_BAR } from '../Types'

export const showMoreAction = data => ({
  type: SHOW_MORE_TAB,
  data
})

export const hideTabBar = data => ({
  type: HIDE_TAB_BAR,
  data
})
