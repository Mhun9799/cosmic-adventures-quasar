import axios from 'axios';

export async function getAccessTokenFromCookie() {
  const cookie = document.cookie;
  const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
  if (!token) {
    throw new Error('Access token not found in cookie.');
  }
  return token.split('=')[1];
}

export async function refreshAccessToken(refreshToken) {
  try {
    const response = await axios.post('http://localhost:8080/api/v1/refresh', null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      }
    });
    const newAccessToken = response.headers['authorization'];
    return newAccessToken.split(' ')[1];
  } catch (error) {
    throw new Error('Error refreshing access token:', error);
  }
}

export function getRefreshTokenFromCookie() {
  const cookie = document.cookie;
  const refreshTokenCookie = cookie.split('; ').find(row => row.startsWith('RefreshToken='));
  return refreshTokenCookie ? refreshTokenCookie.split('=')[1] : null;
}

export function setAccessTokenCookie(token) {
  document.cookie = `Authorization=${token}; path=/;`;
}
