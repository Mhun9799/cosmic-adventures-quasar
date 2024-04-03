<template>
  <q-page class="flex flex-center" style="background-color: #000;">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">비밀번호 수정</div>
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="userPassword" type="password" label="기존 비밀번호" />
        <q-input outlined v-model="userNewPassword" type="password" label="새로운 비밀번호" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="비밀번호 수정" color="primary" @click="updatePassword" />
        <!-- 에러 메시지 표시 -->
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';
import { getAccessTokenFromCookie } from "src/Module/authModule";

export default {
  name: "updatePasswordPage",
  data() {
    return {
      userPassword: '',
      userNewPassword: '',
      errorMessage: '' // 에러 메시지 변수 추가
    };
  },
  methods: {
    async updatePassword() {
      try {
        const token = await getAccessTokenFromCookie();
        if (!token) {
          console.error('Access token not found in cookie.');
          return;
        }
        const response = await axios.put('http://localhost:8080/api/v1/users/my-password', {
          userPassword: this.userPassword,
          userNewPassword: this.userNewPassword
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        alert(response.data);
        this.$router.push('/main-layout');
      } catch (error) {
        console.error('비밀번호 수정 중 오류:', error);
        // 서버에서 받은 에러 메시지 표시
        if (error.response && error.response.data && error.response.data.message) {
          this.errorMessage = error.response.data.message;
        } else {
          this.errorMessage = '오류가 발생했습니다. 다시 시도해주세요.';
        }
      }
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
