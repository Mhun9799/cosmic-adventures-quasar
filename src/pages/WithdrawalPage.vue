<template>
  <div>
    <h1>회원 탈퇴 페이지</h1>
    <button @click="withdrawal">회원 탈퇴</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "WithdrawalPage",
  methods: {
    async withdrawal() {
      try {
        const accessToken = this.getAccessTokenFromCookie();

        const response = await axios.delete(`http://localhost:8080/api/v1/users/withdrawal`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        // 응답 처리
        if (response.status === 200) {
          // 쿠키에서 엑세스 토큰 삭제
          document.cookie = 'Authorization=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          // 쿠키에서 리프레시 토큰 삭제 (만약 해당 쿠키가 존재한다면)
          document.cookie = 'RefreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

          alert('회원 탈퇴가 성공적으로 처리되었습니다.');
          this.$router.push({ path: "/main-layout" });
        } else {
          throw new Error('회원 탈퇴 요청이 실패했습니다.');
        }
      } catch (error) {
        console.error('회원 탈퇴 중 오류가 발생했습니다.', error);
        alert('회원 탈퇴 중 오류가 발생했습니다.');
      }
    },
    getAccessTokenFromCookie() {
      const cookie = document.cookie;
      const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
      if (!token) {
        throw new Error('Access token not found in cookie.');
      }
      return token.split('=')[1];
    }
  }
}
</script>
