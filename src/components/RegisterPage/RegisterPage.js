import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';


function RegisterPage() {
  const dispatch = useDispatch();
  const BASE_URL = 'http://52.79.41.0:8080/user/sign-up';
  const [formValues, setFormValues] = useState({
    birthdate: '',
    email: '',
    gender: '',
    nickname: '',
    password: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(BASE_URL, formValues)
      .then((response) => {
        alert("회원가입성공");
        if ((response.status === 200)) {
          dispatch(login(response.data));
          return navigate("/login");
        }
      }).catch((errors) => {
        setErrors(errors.response)
        console.log(errors.response)
      })

  }


  return (

    <FormContainer onSubmit={handleSubmit}>
      <Header>
        <Logo>
          회원가입
        </Logo>
      </Header>
      <InputContainer>
        <Label htmlFor="birthdate">생년월일 (YYYYMMDD)</Label>
        <Input
          type="text"
          id="birthdate"
          name="birthdate"
          value={formValues.birthdate}
          onChange={handleChange}
          required
        />
        {errors.birthdate && <span>{errors.birthdate}</span>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="email">이메일</Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          required
        />
        {errors.email && <span>{errors.email}</span>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="gender">성별</Label>
        <RadioContainer>
          <InputRadio
            type="radio"
            id="MALE"
            name="gender"
            value="MALE"
            onChange={handleChange}
            required
          />
          <RadioLabel htmlFor="MALE">Male</RadioLabel>

          <InputRadio
            type="radio"
            id="FEMALE"
            name="gender"
            value="FEMALE"
            onChange={handleChange}
            required
          />
          <RadioLabel htmlFor="FEMALE">Female</RadioLabel>
          <InputRadio
            type="radio"
            id="NONE"
            name="gender"
            value="NONE"
            onChange={handleChange}
            required
          />
          <RadioLabel htmlFor='NONE'>none</RadioLabel>
        </RadioContainer>
        {errors.gender && <span>{errors.gender}</span>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="nickname">아이디</Label>
        <Input
          type="text"
          id="nickname"
          name="nickname"
          value={formValues.nickname}
          onChange={handleChange}
          required
        />
        {errors.nickname && <span>{errors.nickname}</span>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        {errors.password && <span>{errors.password}</span>}
      </InputContainer>

      <InputContainer>
        <Label htmlFor="phoneNumber">전화번호</Label>
        <Input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={formValues.phoneNumber}
          onChange={handleChange}
          required=""
        />
        {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
      </InputContainer>

      <button type="submit">회원가입</button>
    </FormContainer>
  );
}

export default RegisterPage;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Header = styled.div`
display: center;
position: fixed;
top: 0;
width: 100vw;
height: 70px;
padding: auto;
background-color: #F7323F;
`;

const Logo = styled.div`
font-weight: bolder;
margin-top: 10px;
display: flex;
color: white;
font-size: 30px;
position: absolute;
  left: 20%;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  width: 100%;
  max-width: 400px;
`;

const Label = styled.label`
display:flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color:gray;
  font-weight: bolder;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  width: 100%;
  margin-top: 0.5rem;
  border-color: #FB0552;
`;

const InputRadio = styled.input`
margin-right: 10px;
  transform: ${({ checkbox }) => checkbox || 'scale(1.4)'};
  -webkit-appearance: none;
  border: 0.5px solid;
  padding: 5px;
  border-radius: 2px;
  border-color: #FB0552;
  position: relative;
  margin-left: 10px;
  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #FB0552;
  }
`;

const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const RadioLabel = styled.label`
  margin-right: 0.5rem;
  font-size: 20px;
  display:flex;
  flex-direction: row;
  color:gray;
`;

// const Button = styled.div`
// display: center;
// justify-content: space-evenly;
// color: #F7323F;
// background-color: #F7323F;
// border: 1px solid white;
// width: 120px;
// height: 40px;
// border-radius: 5px;
// align-items: center;
// color: white;
// font-weight: bolder;
// font-size: 20px;

// `;

