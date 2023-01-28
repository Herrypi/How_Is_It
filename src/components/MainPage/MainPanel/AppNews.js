import React from 'react'
import styled from "styled-components";
function AppNews() {
  return (
    <Wraper>
      <Name>
        여기어때 소식
      </Name>
      <Menu>
      <News>
        <ul>
          <li>
            <a href='https://www.goodchoice.kr/b2b/intro' >
            <img src='images/business.png'alt=""/>
            <strong>여기어때 비지니스<br />
            <p>
            출장부터 복지까지<br />
            여기어때 비즈니스로 스마트하게</p></strong></a>
            
          </li>
          <li>
            <a href='https://www.goodchoice.kr/font'>
            <img src='images/jal.png'alt=""/>
            <strong>여기어때 서체 출시
            <p>젊고 당당한 여기어때 잘난체
            <br/>
            지금 다운로드 받으세요</p>
            </strong>
            </a>
          </li>
        </ul>
      </News>
      </Menu>
    </Wraper>
  )
}

export default AppNews

const Wraper = styled.div`
display:center;
`;

const Menu = styled.div`
margin-top: 30px;
`;

const Name = styled.div`
font-size: 25px;
font-weight: bold;
display:flex;
justify-content:left;
`;

const News = styled.div`
float:center;
ul, li{
  list-style: none;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  display:flex;
  justify-content: space-between;
}

strong{
  font-size: 20px;
  color: blackgreen;
  margin: 40px;
  
}

li{
  width: 473px;
  height: 162px;
  border: 1px solid rgba(0,0,0,0.08);
  box-sizing: border-box;
  text-align:left;
  overflow:hidden;

}

p{
  font-size:15px;
  font-weight: normal;
  color: black;
  margin-top: 10px;
}

a{
  text-decoration: none;
  display:flex;
}

img{
  width:162px;
  height:162px;
}
`;