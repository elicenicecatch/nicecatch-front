import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navi__container">
      <div className="navi_leftside">
        <div className="profile_character">
          <img src="" alt="" />
        </div>
        <p className="profile_name">유나규나</p>
        <p className="navi_bar">|</p>
        <p className="navi_level">Lv.1</p>
        {/* <img
          className="profile_option"
          src={process.env.PUBLIC_URL + `/icon/profile_change`}
        /> */}
      </div>

      <div className="navi_rightside">
        <div className="web_icons">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
        <div className="making_room_btn">
          <p>방 만들기</p>
        </div>
        <div className="logout_btn">
          <p>로그아웃</p>
        </div>
      </div>
      <p></p>
    </div>
  );
};

export default Navigation;
