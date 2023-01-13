import React from "react"
import styled from "styled-components";
import { useNavigate } from "react-router";

function AppNotice() {

    const navigate = useNavigate();

    const goToEvent = () => {
        navigate("/viewmorepage")
    }

  return (
    <div>
      <Banner onClick={goToEvent}><img src="images/event.png" /></Banner>
    </div>
  );
}

export default AppNotice;

const Banner = styled.div`
cursor: pointer;
img{
    width: 1000px;
    height 500px;
    object-fit: cover;
}
`;
