import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '/src/components/atoms/Profile/Profile';
import { postFetch, SERVER_URL } from '/src/utils';

import './JoinPage.scss';

const Join = () => {
  const navigate = useNavigate();

  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  // 필드별 입력 처리 (공통 메소드)
  const onInput = (e) => {
    const { name: targetName, value: targetValue } = e.target;

    if (targetName === 'nickname') setNickname(targetValue);
    else if (targetName === 'email') setEmail(targetValue);
    else if (targetName === 'password') setPassword(targetValue);
    else if (targetName === 'rePassword') setRePassword(targetValue);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // 입력된 정보의 유효성 검사
    if (nickname.trim() === '') {
      alert('닉네임을 입력해주세요');
      nicknameRef.current.focus();
      return;
    }

    if (emailRef.current.value === '') {
      alert('이메일을 입력해주세요');
      return;
    }

    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$/;
    if (!passwordPattern.test(passwordRef.current.value)) {
      alert('비밀번호를 확인해주세요.(영문, 숫자 포함 6~20자)');
      passwordRef.current.focus();
      return;
    }

    if (checkPasswordRef.current.value === '') {
      alert('비밀번호 확인을 입력해주세요.');
      checkPasswordRef.current.focus();
      return;
    }

    if (passwordRef.current.value !== checkPasswordRef.current.value) {
      alert('비밀번호가 일치하지 않습니다.');
      checkPasswordRef.current.focus();
      return;
    }

    // 회원가입 시 필요한 data를 생성
    const imageIndex =
      JSON.parse(localStorage.getItem('profile'))?.imageIndex || 1; //
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      nickName: nickname,
      image: `profile_${imageIndex}.png`,
    };

    try {
      // 유효성 통과 후 로직(Post)
      const json = await postFetch(`${SERVER_URL}/api/auth/sign-up`, data);
      if (json && Object.keys(json).length > 0) {
        localStorage.setItem('userData', JSON.stringify(data));
        navigate('/join_complete');
      } 
    } catch (error) {
      console.error('Error:', error);
      alert('회원 가입에 실패했습니다\n 관리자에게 문의바랍니다');
    }
  };

  return (
    <div className="join">
      <div className="join_container">
        <h3>회원가입</h3>
        <form className="join_form" onSubmit={onSubmit} autoComplete="off">
          <Profile setNickname={setNickname} nickname={nickname} nicknameRef={nicknameRef}  />
          <label htmlFor="email">이메일 주소</label>
          <div className="input_box">
            <input
              type="email"
              placeholder="이메일 주소를 입력해주세요"
              name="email"
              id="email"
              ref={emailRef}
              onChange={onInput}
            />
            <button type="button" className="small_btn">
              중복 확인
            </button>
          </div>
          <label htmlFor="password">비밀번호 입력</label>
          <input
            type="password"
            placeholder="영문, 숫자가 포함된 6~20자리"
            name="password"
            id="password"
            minLength={6}
            maxLength={20}
            ref={passwordRef}
            onChange={onInput}
          />
          <label htmlFor="checkPassword">비밀번호 확인</label>
          <input
            type="password"
            placeholder="영문, 숫자가 포함된 6~20자리"
            name="checkPassword"
            id="checkPassword"
            minLength={6}
            maxLength={20}
            ref={checkPasswordRef}
            onChange={onInput}
          />
          <button className="button">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
