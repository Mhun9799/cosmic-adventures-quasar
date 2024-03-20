<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">회원가입</div>
      </q-card-section>

      <q-card-section>
        <q-input outlined v-model="name" label="이름" />
        <q-input outlined v-model="email" label="이메일" />
        <q-input outlined type="password" v-model="password" label="비밀번호" />
        <q-input outlined type="password" v-model="confirmPassword" label="비밀번호 확인" />
        <q-input outlined v-model="introduction" label="자기소개" />
        <q-input outlined v-model="phoneNumber" label="휴대폰 번호" />

      </q-card-section>

      <q-card-section class="q-pt-sm">
        <q-file v-model="profilePicture" label="프로필 사진" accept="image/*" />
      </q-card-section>

      <q-card-section class="text-right">
        <q-btn label="가입하기" color="primary" @click="signup" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      introduction: '',
      phoneNumber: '',
      profilePicture: null,
    };
  },
  methods: {
    signup() {
      // 1. Input Validation (see below)

      // 2. Construct User Data Object
      const userData = {
        name: this.name,
        email: this.email,
        // ... (rest of the data)
        // ... (handle profilePicture upload)
      };

      // 3. Send API Request to Backend
      // this.$axios.post('/signup', userData) ...
    },
  },
};
</script>
