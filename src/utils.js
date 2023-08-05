export const SERVER_URL = 'http://localhost:3001';
const LOGIN_TOKEN = 'token';

// 토큰 가져오기
export const getSaveToken = () => {
  const json = localStorage.getItem(LOGIN_TOKEN);
  if (json) {
    const obj = JSON.parse(json);
    if (Date.now() > obj.expire) {
      return '';
    } else {
      return obj.token;
    }
  } else {
    return '';
  }
};

export const postFetch = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        authorization: `token ${getSaveToken()}`,
      },
      body: JSON.stringify(body),
    });

    console.log('Request URL:', url);
    console.log('Request Body:', body);
    console.log('Response:', response);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (!data) {
      throw new Error('응답 데이터가 비어있습니다.');
    }

    return data;
  } catch (error) {
    throw error;
  }
};

// 공통으로 사용 하는 fetch함수(PUT요청)
export const putFetch = async (url, body) => {
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: `token ${getSaveToken()}`,
    },
    body: JSON.stringify(body),
  });
  return await response.json();
};

// 공통으로 사용 하는 fetch함수(GET요청)
export const getFetch = async (url) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: `token ${getSaveToken()}`,
    },
  });
  return await response.json();
};

// 공통으로 사용 하는 fetch함수(DELETE요청)
export const deleteFetch = async (url) => {
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: `token ${getSaveToken()}`,
    },
  });
  return await response.json();
};
