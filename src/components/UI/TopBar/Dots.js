import React from 'react'

import styled from 'styled-components'

const DotsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  padding-left: 14px;
  width: 200px;
`

const Dot = styled.div`
  background-color: ${(props) => props.bgColor};
  border-radius: 50%;
  margin-right: 7px;
  height: 12px;
  width: 12px;
`

const dotsList = ['rgb(255, 69, 58)', 'rgb(255, 214, 10)', 'rgb(50, 215, 75)']

const Dots = () => (
  <DotsWrapper>
    {
      dotsList.map(dot => (
        <Dot
          key={dot}
          bgColor={dot}
        />
      ))
    }
  </DotsWrapper>
)

export default Dots
