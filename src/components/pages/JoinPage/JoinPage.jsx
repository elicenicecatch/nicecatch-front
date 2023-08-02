import '/src/components/pages/JoinPage/JoinPage.scss';
import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Join = () => {
  const nicknameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();

  // 테스트용입니다. 닉네임 및 프로필 설정은 컴포넌트 분리 예정!
  const adjective = [
    '똑똑한',
    '말하는',
    '명탐정',
    '행복한',
  ];

  const nicknames = [
    '곰',
    '꼬꼬',
    '펭귄',
    '고릴라',
    '호랑이',
    '담비',
    '댕댕이',
    '몽키',
    '다람쥐',
    '삐약이',
    '돼지',
    '토끼',
    '악어',
    '개구리',
    '하마',
    '문어',
    '야옹이',
    '사자',
    '얼룩말',
    '코끼리',
    '판다',
    '양',
    '기린',
    '여우',
  ];

  const profileImages = [];
  for (let i = 1; i <= 24; i++) {
    profileImages.push(`profile_${i}.png`);
  }

  const [randomImage, setRandomImage] = useState('profile_1.png');
  const [randomNickname, setRandomNickname] = useState(`${adjective[0]} ${nicknames[0]}`);

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    const selectedImage = profileImages[randomIndex];
    setRandomImage(selectedImage);

    getRandomNickname(randomIndex);
  };

  const getRandomNickname = (randomIndex) => {
    const randomAdjectiveIndex = Math.floor(Math.random() * adjective.length);
    const selectedAdjective = adjective[randomAdjectiveIndex];
    const selectedNickname = nicknames[randomIndex];

    const randomNickname = `${selectedAdjective} ${selectedNickname}`;
    setRandomNickname(randomNickname);
  };

  return (
    <div className="join">
      <div className="join_container">
        <h3>회원가입</h3>
        <form className="join_form">
          <div className="profile_box">
            <div
              className="profile_img"
              style={{
                backgroundImage: `url(/src/assets/images/profiles/${randomImage})`,
              }}
            ></div>
            <div className="random_button" onClick={getRandomImage}></div>
          </div>

          <label htmlFor="nickname">닉네임</label>
          <div className="input_box">
            <input
              type="text"
              placeholder={randomNickname}
              value={randomNickname}
              name="nickname"
              id="nickname"
              ref={nicknameRef}
            />
          </div>
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
