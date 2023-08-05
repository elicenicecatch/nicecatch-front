import { useState, useEffect } from 'react';
import adjectives from './adjectives';
import nicknames from './nicknames';
import './Profile.scss';

const Profile = ({ setNickname, nickname, nicknameRef }) => {
  const profileImages = [];
  for (let i = 1; i <= 24; i++) {
    profileImages.push(`profile_${i}.png`);
  }

  const [randomImage, setRandomImage] = useState();
  const [randomNickname, setRandomNickname] = useState();

  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    const selectedImage = profileImages[randomIndex];

    setRandomImage(selectedImage);
    getRandomNickname(randomIndex);
  };

  const getRandomNickname = (randomIndex) => {
    const randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const selectedAdjective = adjectives[randomAdjectiveIndex];
    const selectedNickname = nicknames[randomIndex];
    const randomNickname = `${selectedAdjective} ${selectedNickname}`;
    
    setRandomNickname(randomNickname);
    setNickname(randomNickname);
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <div className="profile">
      <div className="profile_img_box">
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
          value={nickname}
          name="nickname"
          id="nickname"
          maxLength={10}
          onChange={(e) => setNickname(e.target.value)}
          ref={nicknameRef}
        />
      </div>
    </div>
  );
};

export default Profile;
