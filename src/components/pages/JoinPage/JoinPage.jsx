import React, { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Profile from '/src/components/atoms/Profile/Profile';
import './JoinPage.scss';

const Join = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  return (
    <div className="join">
      <div className="join_container">
        <h3>회원가입</h3>
        <form className="join_form">
          <Profile />

          <label htmlFor="email">이메일 주소</label>
          <div className="input_box">
            <input
              type="email"
              placeholder="이메일 주소를 입력해주세요"
              name="email"
              id="email"
              ref={emailRef}
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
          />
          <p className="info_msg"></p>
          <button className="button">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
