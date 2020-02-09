import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 0 18px;
  overflow: scroll;

  ${({ spaced }) => (
    spaced && css`
      grid-template-columns: 1fr 1fr;
    `
  )}
`

Grid.defaultProps = {
  spaced: false
}

export default Grid
