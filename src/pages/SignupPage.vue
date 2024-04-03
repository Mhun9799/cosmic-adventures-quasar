<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">회원가입</div>
      </q-card-section>

      <q-card-section>
        <q-input outlined v-model="name" label="이름" />
        <q-input outlined v-model="nickname" label="닉네임" />
        <q-input outlined v-model="email" label="이메일" />
        <q-input outlined type="password" v-model="password" label="비밀번호" />
        <q-input outlined type="password" v-model="confirmpassword" label="비밀번호 확인" />
        <q-input outlined v-model="introduction" label="자기소개" />
        <q-input outlined v-model="phoneNumber" label="휴대폰 번호" />

        <!-- 역할 선택 드롭다운 메뉴 -->
        <q-select
          outlined
          v-model="role"
          label="역할"
          :options="roleOptions"
        />
      </q-card-section>

      <q-card-section class="q-pt-sm">
        <q-file v-model="profilePicture" label="프로필 사진" accept="image/*" />
        <!-- 이미지 취소 버튼 -->
        <q-btn label="이미지 취소" color="negative" @click="cancelImageUpload" v-if="profilePicture !== ''" />
      </q-card-section>

      <q-card-section class="text-right">
        <q-btn label="가입하기" color="primary" @click="signup" />
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
      email: '',
      password: '',
      confirmpassword: '',
      introduction: '',
      phoneNumber: '',
      nickname:'',
      role: null, // 역할 선택을 위한 변수 추가
      profilePicture: '', // 프로필 사진 초기값을 비어있도록 수정
      roleOptions: [ // 역할 선택 옵션
        {label: '일반 사용자', value: 'USER'},
        {label: '관리자', value: 'ADMIN'}
      ],
      errorMessage: '' // 에러 메시지를 저장할 변수 추가
    };
  },
  methods: {
    signup() {
      // Input Validation
      if (!this.name || !this.email || !this.password || !this.confirmpassword) {
        this.errorMessage = '필수 정보를 입력하세요.';
        return;
      }

      // Construct FormData object
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('nickname', this.nickname);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('confirmpassword', this.confirmpassword);
      formData.append('introduction', this.introduction);
      formData.append('tlno', this.phoneNumber);
      formData.append('role', this.role ? this.role.value : ''); // 역할 정보를 문자열 형태로 전송
      // 프로필 이미지가 있는 경우에만 FormData에 추가
      if (this.profilePicture !== '') {
        formData.append('profilePicUrl', this.profilePicture);
      }

      // Send API Request to Backend
      axios.post('http://localhost:8080/api/v1/users/signup', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then(response => {
          // Handle success response
          console.log('Signup successful', response.data);
          alert('회원가입이 완료되었습니다.');
          this.$router.push('/login');
        })
        .catch(error => {
          // Handle error response
          console.error('Signup failed', error.response.data);
          this.errorMessage = error.response.data.message; // 백엔드에서 받은 에러 메시지를 사용자에게 표시
        });
    },

    cancelImageUpload() {
      // 이미지 취소 기능 - 선택한 이미지 초기화
      this.profilePicture = ''; // 비어있는 문자열로 설정하여 기본 이미지 URL이 사용되도록 함
    }
  },
};
</script>

<style>
.error-message {
  color: red;
  margin-top: 10px;
}
</style>
