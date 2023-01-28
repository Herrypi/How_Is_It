import React, { Component } from "react";
import AppHeader from "./AppHeader";
import AppNotice from "./AppNotice";
import AppLink from './AppLink';
import AppNews from './AppNews';
// import AppEvents from './AppEvents';
import styled from "styled-components";
// import { Container } from "react-bootstrap";

export class MainPanel extends Component {
    render() {
        return (
            <div>
                <Header>
                    <AppHeader />
                </Header>
                <Container>
                    <Notice >
                        <AppNotice />
                    </Notice>
                    <Linked>
                        <AppLink />
                    </Linked>
                    <News>
                        <AppNews />
                    </News>
                </Container>
            </div>
        )
    }
}

export default MainPanel;

const Container = styled.div`
margin-top : 120px;
width:70%;
display:inline-block;
`;

const Header = styled.div`
position: sticky;
top: 0px;
`;

const Notice = styled.div`

`;

const Linked = styled.div`
margin-top: 50px;
`;

const News = styled.div`
margin-top: 50px;
`;