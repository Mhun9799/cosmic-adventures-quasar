<template>
  <q-page class="flex flex-center" style="background-color: #000;">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">정말 탈퇴를 하시겠습니까?</div>
        <div class="text-h6">탈퇴 후 14일후에 정보가 삭제됩니다.</div>
        <div class="text-h6">탈퇴 취소를 하면 다시 서비스 이용 가능합니다.</div>
      </q-card-section>
      <q-card-section>
        <q-btn label="회원 탈퇴" color="negative" @click="withdrawal" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  name: "WithdrawalPage",
  methods: {
    async withdrawal() {
      try {
        const accessToken = this.getAccessTokenFromCookie();

        const response = await axios.delete(`http://dearforbearance.com/api/v1/users/withdrawal`, {
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
          this.$router.push({ path: "/Home" });
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

<style scoped>
.q-page {
  background-color: #000;
}

.q-card {
  width: 400px;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
