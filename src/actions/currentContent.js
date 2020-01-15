export const SET_CURRENT_CONTENT = 'SET_CURRENT_CONTENT'

export const setCurrentContent = (currentContent) => {
  return {
    type: SET_CURRENT_CONTENT,
    currentContent
  }
}
