<template>
  <div>
    <!-- 첫 번째 섹션: 비밀번호 찾기 인증 코드 전송 -->
    <div class="password-reset-container">
      <input type="email" v-model="email1" placeholder="이메일" class="input-field">
      <input type="text" v-model="phoneNumber1" placeholder="핸드폰 번호" class="input-field">
      <button @click="sendPasswordResetCode" class="send-button">비밀번호 찾기 인증 코드 전송</button>
    </div>

    <!-- 두 번째 섹션: 임시 비밀번호 전송 -->
    <div class="password-reset-container">
      <input type="email" v-model="email2" placeholder="이메일" class="input-field">
      <input type="text" v-model="phoneNumber2" placeholder="핸드폰 번호" class="input-field">
      <input type="text" v-model="code" placeholder="인증 코드" class="input-field">
      <button @click="sendTemporaryPassword" class="send-button">임시 비밀번호 전송</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SendPasswordCode",
  data() {
    return {
      // 첫 번째 섹션에 대한 데이터
      email1: '',
      phoneNumber1: '',
      // 두 번째 섹션에 대한 데이터
      email2: '',
      phoneNumber2: '',
      code: ''
    };
  },
  methods: {
    async sendPasswordResetCode() {
      try {
        const response = await axios.post('http://dearforbearance.com/api/v1/users/send-password-code', {
          email: this.email1,
          phoneNumber: this.phoneNumber1
        });
        alert(response.data);
      } catch (error) {
        console.error('비밀번호 찾기 인증 코드 전송 중 오류:', error);
        alert('이메일 확인 및 핸드폰번호를 - 포함시켜주세요. 다시 시도해주세요.');
      }
    },
    async sendTemporaryPassword() {
      try {
        const response = await axios.post('http://dearforbearance.com/api/v1/users/temporary-password', {
          email: this.email2,
          phoneNumber: this.phoneNumber2,
          code: this.code
        });
        alert(response.data);
      } catch (error) {
        console.error('임시 비밀번호 전송 중 오류:', error);
        alert('이메일 확인 및 핸드폰번호를 - 포함시켜주세요. 다시 시도해주세요');
      }
    }
  }
}
</script>

<style scoped>
.password-reset-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px; /* 세로 방향 중앙 정렬을 위한 여백 추가 */
}

.input-field {
  margin-bottom: 10px;
  padding: 8px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.send-button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.send-button:hover {
  background-color: #0056b3;
}
</style>
