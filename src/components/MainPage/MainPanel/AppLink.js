import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function AppLink() {

  const navigate = useNavigate();

    const goToRoomlist = () => {
        navigate("/roomlistpage");
    }

  return (
    <div>
      <Link>
      
          <img src='images/motel.png'alt=''/>
        
          <Hotel onClick={goToRoomlist}><img src='images/hotel.png'alt=''/> </Hotel>
        
          <img src='images/pention.png' alt=''/>
        
          <img src='images/guesthouse.png'alt=''/>
        
          <img src='images/camping.png'alt=''/>
        
          <img src='images/travel.png'alt=''/>
        
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