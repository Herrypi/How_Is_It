import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function AppHeader() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };

  const goToLogin = () => {
    navigate("/login");
  };

  const goToEvent = () => {
    navigate("/viewmorepage");
  };

  const goToRegister = () => {
    navigate("/Register");
  };
  const goToOrdered = () => {
    navigate("/Ordered");
  };

  return (
    <Wrapper>
      <Icons>
        <Logo onClick={goToMain}>
          <img src="images/logo/logo.png" alt="logo" />
        </Logo>
        <Mypage>
          <Search>
            <FaSearch />
          </Search>
          <Reserved onClick={goToOrdered}>예약내역</Reserved>
          <Moreanything onClick={goToEvent}>더보기</Moreanything>
          <Login onClick={goToLogin}>로그인</Login>
        </Mypage>
      </Icons>
    </Wrapper>
  );
}

export default AppHeader;

const Wrapper = styled.section`
  display: center;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 70px;
  padding: auto;
  background-color: #f7323f;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 230px;
`;

const Logo = styled.div`
cursor: pointer;
display: flex;
justify-content:center;
img{
    width: 120px;
    height: 40px;
    object-fit: cover;
}
`;

const Mypage = styled.div`
  display: flex;
  font-size: 20px;
  color: rgb(213, 212, 212);
  margin-right: 100px;
`;

const Reserved = styled.div`
  padding: 10px;
  cursor: pointer;
  margin-right: 10px;
  &:hover {
    color: white;
  }
`;

const Login = styled.div`
  padding: 10px;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

const Moreanything = styled.div`
  padding: 10px;
  cursor: default;

  span {
    font-weight: bolder;
  }
  &:hover {
    color: white;
  }
`;

const Search = styled.div`
  padding: 10px;
  margin-right: 10px;
`;

// <header>
//     <h1>
//         여기어때
//     </h1>
//     <nav>
//         <ul>
//             <li>
//                 <a href="/"><FaSearch/></a>
//             </li>
//             <li>
//                 <a href="/">내주변</a>
//             </li>
//             <li>
//                 <a href="/">예약내역</a>
//             </li>
//             <li>
//                 <Nav>
//                     <NavDropdown
//                     id="nav-dropdown"
//                     title="더보기"
//                     menuVariant="red">
//                         <NavDropdown.Item href="/">공지사항</NavDropdown.Item>
//                         <NavDropdown.Item href="/">이벤트</NavDropdown.Item>
//                         <NavDropdown.Item href="/">자주묻는질문</NavDropdown.Item>
//                         <NavDropdown.Item href="/">약관 및 정책</NavDropdown.Item>

//                 {/* <a href="/">더보기</a> */}
//                 </NavDropdown>
//                 </Nav>
//             </li>
//             <li>
//                 <a href="/login">로그인</a>
//             </li>
//         </ul>
//     </nav>
// </header>
