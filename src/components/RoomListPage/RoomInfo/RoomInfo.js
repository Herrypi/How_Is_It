import React from 'react'
import styled from 'styled-components'
function RoomInfo() {
  return (
    <Rooms>
      <h1>Rooms~</h1>
    </Rooms>
  )
}

export default RoomInfo

const Rooms = styled.div`
width: 800px;
height: 300px;
border: 1px solid black;
float: left;
margin: 19px;
box-sizing: border-box;
`;
