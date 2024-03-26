<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">프로필 수정</div>
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="name" label="이름" />
        <q-input outlined v-model="introduction" label="소개" />
        <q-input outlined v-model="tlno" label="전화번호" />
        <q-file v-model="profilePicture" label="프로필 사진" accept="image/*" />
        <q-btn label="이미지 취소" color="negative" @click="cancelImageUpload" v-if="profilePicture !== ''" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="저장" color="primary" @click="updateProfile" />
        <!-- 에러 메시지 표시 -->
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      introduction: '',
      tlno: '',
      profilePicture: '',
      errorMessage: ''
    };
  },
  methods: {
    updateProfile() {
      // Input Validation
      if (!this.name || !this.introduction || !this.tlno) {
        this.errorMessage = '모든 필드를 작성하세요.';
        return;
      }

      // Construct FormData object
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('introduction', this.introduction);
      formData.append('tlno', this.tlno);
      // 프로필 이미지가 있는 경우에만 FormData에 추가
      if (this.profilePicture !== '') {
        formData.append('profilePicUrl', this.profilePicture);
      }

      // Send API Request to Backend
      axios.put('http://localhost:8080/api/v1/users/profile-edit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${this.getAccessTokenFromCookie()}`
        }
      })
        .then(response => {
          // Handle success response
          console.log('Profile updated successfully:', response.data);
          alert('프로필이 성공적으로 수정되었습니다.');
          // 수정 성공 후 MyPage로 리다이렉션
          this.$router.push('/myPage');
        })
        .catch(error => {
          // Handle error response
          console.error('Error updating profile:', error.response.data);
          this.errorMessage = error.response.data.message; // 백엔드에서 받은 에러 메시지를 사용자에게 표시
        });
    },

    cancelImageUpload() {
      // 이미지 취소 기능 - 선택한 이미지 초기화
      this.profilePicture = ''; // 비어있는 문자열로 설정하여 기본 이미지 URL이 사용되도록 함
    },

    getAccessTokenFromCookie() {
      const cookie = document.cookie;
      const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
      return token ? token.split('=')[1] : null;
    }
  }
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
