import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;

const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
`;

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send email and password to the server for authentication
      const response = await axios.post('http://43.202.93.57:8080/members/login', {
        email,
        password,
        
      });

      // Assuming the server responds with a token upon successful authentication
      console.log(response.data.result.jwt)
      const token = response.data.result.jwt;

      // Store the token in local storage or state for further use
      localStorage.setItem('token', token);
      console.log(token);   
      console.log('Login successful!');
      navigate('/'); // Redirect to the login page
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  return (
    <LoginContainer>
      <h2>로그인</h2>
      <LoginForm onSubmit={handleLogin}>
        <FormLabel htmlFor="email">이메일:</FormLabel>
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FormLabel htmlFor="password">비밀번호:</FormLabel>
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <SubmitButton type="submit" onClick={handleLogin} value="로그인" />
      </LoginForm>
    </LoginContainer>
  );
};

export default Signin;
