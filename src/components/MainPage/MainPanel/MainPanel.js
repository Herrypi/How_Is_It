import React, { Component } from "react";
import AppHeader from "./AppHeader";
import AppNotice from "./AppNotice";
import AppLink from './AppLink';
// import AppNews from './AppNews';
// import AppEvents from './AppEvents';
import styled from "styled-components";
// import { Container } from "react-bootstrap";

export class MainPanel extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Header>
                        <AppHeader />
                    </Header>
                    <Notice >
                        <AppNotice />
                    </Notice>
                    <Linked>
                        <AppLink />
                    </Linked>
                </Container>
            </div>
        )
    }
}

export default MainPanel;

const Container = styled.div`
margin-top : 120px;
`;

const Header = styled.div`

`;

const Notice = styled.div`

    width: "100%",
    height: "500px",
    borderRadius: "4px",
    padding: "1rem",
    marginBottom: "1rem",
    overflowY: "auto",


`;

const Linked = styled.div`
max-width: 200px;
`;