import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/actions/userActions';

function LoginPage() {
  const dispatch = useDispatch();
  const BASE_URL = 'http://52.79.41.0:8080/user/sign-in';
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
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
        if (response.status === 200) {
          dispatch(login(response.data));
          return navigate('/');
        }
      })
      .catch((error) => {
        setErrors(error.response.data);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Header>
        <Logo>로그인</Logo>
      </Header>
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
      <button type="submit">로그인</button>
    </FormContainer>
  );
}

export default LoginPage;

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
  background-color: #f7323f;
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
  display: flex;
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: gray;
  font-weight: bolder;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid gray;
  border-radius: 0.3rem;
  width: 100%;
  margin-top: 0.5rem;
  border-color: #fb055`;
