import React from 'react'
import styled from 'styled-components'
function OptionInfo() {
  return (
    <Option>
      <h1>OptionInfo</h1>
    </Option>
  )
}

export default OptionInfo

const Option = styled.div`
width: 300px;
height: 1000px;
border: 1px solid black;
float: left;
margin: 19px;
box-sizing: border-box;`;