export const ENABLE_LOADING_STATE = 'ENABLE_LOADING_STATE'
export const DISABLE_LOADING_STATE = 'DISABLE_LOADING_STATE'

export const enableLoadingState = () => {
  return {
    type: ENABLE_LOADING_STATE
  }
}

export const disableLoadingState = () => {
  return {
    type: DISABLE_LOADING_STATE
  }
}
