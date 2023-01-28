import React from 'react'
import styled from 'styled-components'

function RoomListMainPanel() {
    return (
        <Wraper>
            <Header>
                <Roomlists>
                    <h2>호텔/리조트</h2>
                    <LocalMenu>
                        <p>서울 - 강남/역삼/삼성/신사/청담</p>
                    </LocalMenu>
                </Roomlists>
            </Header>
            <Body>

            </Body>
        </Wraper>
    )
}

export default RoomListMainPanel

const Wraper = styled.div`

margin-top: 70px;
top: 0;
width: 100vw;
height: 140px;
padding: auto;
background-color: #F7323F;
display:flex;
justify-content:center;
`;

const Header = styled.div`
display:flex;
justify-content: start;
padding-left: 90px;
width:80%;


`;

const Roomlists = styled.div`
h2{
    display:flex;
    font-size: 30px;
    font-weight: bolder;
    color: white;
}
margin-top: 30px;
`;

const LocalMenu = styled.div`
p{
    margin-top: 20px;
    color:white;
    font-weight:bolder;
}
`;

const Body = styled.div`

`;