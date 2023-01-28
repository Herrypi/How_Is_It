import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router";

function AppLink() {

  const navigate = useNavigate();

    const goToRoomlist = () => {
        navigate("/roomlistpage");
    }

  return (
    <div>
      <Link>
      
          <img src='images/motel.png'/>
        
          <Hotel onClick={goToRoomlist}><img src='images/hotel.png'/> </Hotel>
        
          <img src='images/pention.png'/>
        
          <img src='images/guesthouse.png'/>
        
          <img src='images/camping.png'/>
        
          <img src='images/travel.png'/>
        
      </Link>
    </div>
  )
}

export default AppLink

const Link = styled.div`
display: flex;
justify-content:center;
img{
  width: 180px;
  height 150px;
  object-fit: cover;
}
`;

const Hotel = styled.div`
cursor: pointer;
`;