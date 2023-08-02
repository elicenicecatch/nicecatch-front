import { useEffect, useRef, useState } from 'react';

import movie from '../../../assets/video/movie.mp4';
import sticker01 from '../../../assets/images/icons/sticker_01.png';
import sticker02 from '../../../assets/images/icons/sticker_02.png';
import sticker03 from '../../../assets/images/icons/sticker_03.png';
import sticker04 from '../../../assets/images/icons/sticker_04.png';
import sticker05 from '../../../assets/images/icons/sticker_08.png';
import sticker06 from '../../../assets/images/icons/sticker_10.png';
import './Profile.scss';

const sample = [
  {
    win: 4,
    image: sticker02,
    name: '잠자는 사자의 코털',
  },
  {
    win: 2,
    image: sticker03,
    name: '잠자는 코털',
  },
  {
    win: 5,
    image: sticker04,
    name: 'hyub',
  },
  {
    win: 3,
    image: sticker05,
    name: 'gamja',
  },
  {
    win: 1,
    image: sticker06,
    name: 'ggomi',
  },
];

const iceServers = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun2.l.google.com:19302' },
    { urls: 'stun:stun3.l.google.com:19302' },
    { urls: 'stun:stun4.l.google.com:19302' },
  ],
};

const Profile = ({ socket, username, room }) => {
  const meRef = useRef();
  const [rtcPeerConnection, setRtcPeerConnection] = useState();
  const [stream, setStream] = useState();
  const getUserInfo = async () => {
    const data = { room: room };
    await socket?.emit('myRoomInfo', data);
  };

  // const addLocalTracks = (rtcPeerConnection) => {
  // localStream.getTracks().forEach((track) => {
  //   rtcPeerConnection.addTrack(track, localStream);
  // });
  // };

  const setLocalStream = async () => {
    const mediaConstraints = {
      audio: true,
      video: true,
    };
    console.log(meRef.current);
    try {
      const currentStream = await navigator.mediaDevices.getUserMedia(
        mediaConstraints,
      );
      // setStream(currentStream);
      meRef.current.srcObject = currentStream;
    } catch (e) {
      console.warn('에러가 발생했습니다', e);
    }
  };

  // 소켓 정보받기
  useEffect(() => {
    // 유저정보 받기
    socket?.on('myRoomUserInfo', (response) => {
      console.log(response);
    });
    // 화상연결 접근
    socket?.on('videoChatConnect', () => {
      setLocalStream();
      socket.emit('start_call', room);
    });
    // 사용자간 화상연결 시작
    socket?.on('start_call', async () => {
      console.log('Socket event callback: start_call');
      setRtcPeerConnection(new RTCPeerConnection(iceServers));
      addLocalTracks(rtcPeerConnection);
      rtcPeerConnection.ontrack = setRemoteStream;
      rtcPeerConnection.onicecandidate = sendIceCandidate;
      await createOffer(rtcPeerConnection);
    });
  }, [socket]);

  // 처음 프로필 컴포넌트 접근시 유저정보 받아오기
  useEffect(() => {
    setTimeout(() => {
      getUserInfo();
    }, 100);
  }, []);

  return (
    <ul>
      <li className="me">
        <div className="profile">
          <video ref={meRef} autoPlay />
          <em>0</em>
        </div>
        <p>{username}</p>
      </li>
      {sample.map((user, i) => (
        <li key={i.toString()}>
          <div className="profile">
            <img src={user.image} />
            <em>{user.win}</em>
          </div>
          <p>{user.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default Profile;
