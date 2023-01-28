import React from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/");
  };
  const goToRegister = () => {
    navigate("/Register");
  };
  return (
    <Wrapper>
      <Title>
        {" "}
        Title 컴포넌트 LoginPage
        <Link to="/">
          <img className="logo" src="/images/logo/logo.png" alt="logo" />
        </Link>
      </Title>

      <Logo onClick={goToMain}>
        <img src="images/logo.png" alt="logo" />
      </Logo>
      <br></br>
      <br></br>
      <hr></hr>

      <LoginBetter>
        
        <Divide></Divide>
        <InputDiv>
          
          <Input
            //onChange={idInput} // idInput기능 어케하지
            type="email"
            placeholder="이메일 주소"
            name="id"
          ></Input>
          <Input
            //onChange={pwInput} // pwInput기능 어케하지
            type="password"
            placeholder="비밀번호"
            name="pw"
          ></Input>
        </InputDiv>
        {/* <LoginBtn onClick={goToLogin}>로그인</LoginBtn>
        <ToSignUP onClick={goToSignUp}>회원가입</ToSignUP> */}
        <LoginBtn >로그인</LoginBtn>
        <ToSignUP onClick={goToRegister}>회원가입</ToSignUP>
      </LoginBetter>
      <br></br>
      <hr></hr>
      <Kakao>
        <img src="/images/kakao_login.png" alt="kakaoLogin" />
      </Kakao>
    </Wrapper>
  );
}

export default LoginPage;
const Wrapper = styled.section`
  ${(props) => props.theme.flexVertical};
  display: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100vw;
  height: 70px;
  padding: auto;
`;

const Logo = styled.div`
font-size: 30px;
cursor: pointer;
margin-top:100px;
img{
    width: 150px;
    height 50px;
    object-fit: cover;
}
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .logo {
    width: 170px;
  }
`;

const Kakao = styled.button`
  margin-top: 20px;
  background: rgb(253, 220, 63);

  img {
    width: 450px;
    height: 85px;
  }
`;

const LoginBetter = styled.div`
  align-items: center;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Divide = styled.p`
  &::after {
    content: "";
    position: absolute;
    top: 30px;
    width: 450px;
    height: 1px;
  }
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 70px 0 30px 0;
`;
const Input = styled.input`
  padding: 0 12px;
  margin-bottom: 30px;
  width: 450px;
  height: 70px;
  border: 1px solid ${(props) => props.theme.borderGray};
  font-size: 24px;
  cursor: text;
  border-radius: 6px;

  &:focus {
    outline: none;
  }
  &::placeholder {
    color: ${(props) => props.theme.middleGray};
    font-size: 20px;
  }
`;
const LoginBtn = styled.button`
  width: 450px;
  height: 70px;
  background-color: red;
  border-radius: 6px;
  font-size: 23px;
  color: white;
`;

const ToSignUP = styled.button`
  width: 450px;
  height: 70px;
  color: black;
  background: none;
  text-decoration: none;
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
`;
// const Moreanything = styled.div`
//   padding: 10px;
//   cursor: default;

//   span {
//     font-weight: bolder;
//   }
//   &:hover {
//     color: white;
//   }
// `;

// const Search = styled.div`
//   padding: 10px;
//   margin-right: 10px;
// `;

// const Mypage = styled.div`
//   display: flex;
//   font-size: 20px;
//   color: rgb(213, 212, 212);
//   margin-right: 100px;
// `;

// const Reserved = styled.div`
//   padding: 10px;
//   cursor: pointer;
//   margin-right: 10px;
//   &:hover {
//     color: white;
//   }
// `;
// const Login = styled.div`
//   padding: 10px;
//   margin: 0 20px;
//   cursor: pointer;
//   position: relative;
//   display: flex;
//   flex-direction: column;
//   &:hover {
//     color: white;
//   }
// `;

// const Icons = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin: 10px 230px;
// `;
