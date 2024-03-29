import React from 'react'
import AppHeader from '../MainPage/MainPanel/AppHeader'
import RoomListMainPanel from './RoomListPanel/RoomListMainPanel'
import FilterInfo from './FilterInfo/FilterInfo'
import OptionInfo from './OptionInfo/OptionInfo'
import styled from 'styled-components'
import RoomInfo from './RoomInfo/RoomInfo'
function RoomListPage() {
  return (
    <Wrapper>
      <AppHeader />
      <RoomListMainPanel />
      <Container>
        <Div>
          <OptionInfo />
        </Div>

        <Div2>
          <FilterInfo />
        </Div2>

        <Div3>
          <RoomInfo />
        </Div3>
      </Container>
    </Wrapper>
  )
}

export default RoomListPage

const Wrapper = styled.div`
`;
const Div = styled.div`
display: block;
float: left;
`;
const Div2 = styled.div`
display: block;
float: none;
`;
const Div3 = styled.div`
display: block;
float: inline-start;`;

const Container = styled.div`
width: 1200px;
height: 1000px;
margin-left: 200px;
`;

