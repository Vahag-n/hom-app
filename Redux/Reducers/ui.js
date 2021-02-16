import { SHOW_MORE_TAB, HIDE_TAB_BAR } from '../Types'

const initialState = {
  showMore: false,
  hideTabBar: false
}

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MORE_TAB:
      return {
        ...state,
        showMore: action.data
      }
    case HIDE_TAB_BAR:
      return {
        ...state,
        hideTabBar: action.data
      }
    default:
      return state
  }
}

export default uiReducer
