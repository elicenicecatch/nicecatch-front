import '/src/components/pages/LoginPage/LoginPage.scss';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoNaver from '/src/assets/images/logo_naver.png';
import logoKakao from '/src/assets/images/logo_kakao.png';
import logoGoogle from '/src/assets/images/logo_google.png';
import io from 'socket.io-client';

const socket = io.connect('http://localhost:3001');

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const joinRoom = () => {
    if (userID !== '' && room !== '') {
      socket.emit('join_room', room);
    }
  };

  return (
    <div className="login">
      <div className="login_container">
        <h2>Nice Catch!</h2>
        <form className="login_form">
          <input
            type="email"
            placeholder="이메일을 입력해주세요"
            name="email"
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            name="password"
            ref={passwordRef}
          />
          <div className="login_features">
            <input type="checkbox" className="id_chk hide " id="saveIdChk" />
            <label htmlFor="saveIdChk" className="id_chk_label ">
              이메일 저장
            </label>
            <Link to = '/join'
              className="join_btn"
            >
              회원가입
            </Link>
          </div>

          <button className="button" onClick={joinRoom}>
            입장하기
          </button>
        </form>
        <div className="sns_login">
          <p>SNS 계정으로 로그인하기</p>
          <ul className="sns_login_list">
            <li>
              <img
                src={logoNaver}
                onClick={() => alert('준비중인 기능입니다.')}
                alt="네이버 로고"
              />
            </li>
            <li>
              <img
                src={logoKakao}
                onClick={() => alert('준비중인 기능입니다.')}
                alt="카카오 로고"
              />
            </li>
            <li>
              <img
                src={logoGoogle}
                onClick={() => alert('준비중인 기능입니다.')}
                alt="구글 로고"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Login;
