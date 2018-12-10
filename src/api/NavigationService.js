/**
 * Easely controls the navigation
 */
import { NavigationActions } from 'react-navigation'

let _navigator

// Sets the first reference of a screen
function setTopLevelNavigator(ref) {
  _navigator = ref
}

// Fire actions passing parameters
function navigate(routeName, params) {
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  )
}

// Perform a back action
function back() {
  _navigator.dispatch(NavigationActions.back())
}

// 
function popToTop(immediate = true) {
  _navigator.dispatch({
    type: NavigationActions.POP_TO_TOP,
    immediate,
  })
}

// Resets the current navigation state
function reset({ actions, index }) {
  _navigator.dispatch({
    type: NavigationActions.RESET,
    index,
    actions,
  })
}

// Export
export const NavigationService = {
  navigate,
  setTopLevelNavigator,
  back,
  popToTop,
  reset,
  navigator: _navigator,
}

window.NavigationService = NavigationService