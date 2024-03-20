<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">로그인</div>
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="email" label="이메일" />
        <q-input outlined v-model="password" label="비밀번호" type="password" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="로그인" color="primary" @click="login" />
      </q-card-section>
      <q-card-section>
        <div class="row q-gutter-sm">
          <div class="col">
            <q-btn
              label="구글 로그인"
              color="red"
              @click="socialLogin('google')"
            />
          </div>
          <div class="col">
            <q-btn
              label="카카오 로그인"
              color="yellow"
              @click="socialLogin('kakao')"
            />
          </div>
          <div class="col">
            <q-btn
              label="네이버 로그인"
              color="green"
              @click="socialLogin('naver')"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn flat label="아직 회원이 아니신가요?" @click="goTo('/signup')" />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // 로그인 로직을 여기에 작성합니다.
    },
    socialLogin(platform) {
      // 소셜 로그인 로직을 여기에 작성합니다.
    },
    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>
