import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const FormLabel = styled.label`
  margin-right: 0.5rem;
`;

const FormInput = styled.input`
  padding: 0.5rem;
`;

const ButtonContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
`;

const VerificationButton = styled.button`
  margin-left: 0.5rem;
  padding: 0.5rem 1rem;
`;

const SubmitButton = styled.input`
  padding: 0.5rem 1rem;
  ${(props) => props.disabled && 'cursor: not-allowed; opacity: 0.5;'}
`;

const ErrorMessage = styled.p`
  color: red;
`;

const SignUp = () => {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      // 여기에 이메일 확인 및 회원가입 로직을 수행합니다.
      const response = await axios.post('http://43.202.93.57:8080/members/signup', {
        email:'wasd123@naver.com',
        password,
        role:'일반',
        nickname
      }, {
        
      });
      console.log(response)
      console.log('회원가입이 성공하였습니다!', response.data);
      navigate('/signin'); // Redirect to the login page
      
    } catch (error) {
      console.error('회원가입에 실패하였습니다!', error);
    }
  };

  const handleDuplicateCheck = async () => {
    try {
      // 여기에 닉네임 중복 확인 로직을 수행합니다.
      const nicknameResponse = await axios.get('http://43.202.93.57:8080', {
        params: {
          nickname,
        },
       
      });

      if (nicknameResponse.data.isDuplicate) {
        setIsNicknameDuplicate(true);
      } else {
        setIsNicknameDuplicate(false);
      }

      console.log('닉네임 중복 확인이 성공하였습니다!', nicknameResponse.data);
    } catch (error) {
      console.error('닉네임 중복 확인에 실패하였습니다!', error);
    }
  };

  return (
    <SignUpContainer>
      <h2>회원가입</h2>
      <SignUpForm onSubmit={handleSignUp}>
        <FormRow>
          <FormLabel htmlFor="nickname">닉네임:</FormLabel>
          <FormInput
            type="text"
            name="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
          <ButtonContainer>
            <VerificationButton onClick={handleDuplicateCheck}>
              중복 확인
            </VerificationButton>
          </ButtonContainer>
        </FormRow>
        {isNicknameDuplicate && (
          <ErrorMessage>이미 사용 중인 닉네임입니다. 다른 닉네임을 입력하세요.</ErrorMessage>
        )}
        <FormRow>
          <FormLabel htmlFor="password">비밀번호:</FormLabel>
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormRow>
        <SubmitButton
          type="submit"
          value="가입하기"
          disabled={isNicknameDuplicate}
        />
      </SignUpForm>
    </SignUpContainer>
  );
};

export default SignUp;
