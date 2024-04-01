<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md" style="width: 400px">
      <q-card-section>
        <div class="text-h6">로그인</div>
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="email" label="이메일" />
        <q-input outlined v-model="password" label="비밀번호" type="password" />
        <q-input outlined v-model="verificationCode" label="이메일 인증 코드" />
        <q-select outlined v-model="role" label="역할" :options="roleOptions" />
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn label="로그인" color="primary" @click="login" />
      </q-card-section>
      <q-card-section>
        <div class="row q-gutter-sm">
          <div class="col">
            <button @click="redirectToGoogleLogin" class="social-googlelogin-button">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAzFBMVEVHcEz////////+/v77+/vx8fL9/f309fX+/v739/f////09PXOz8/5+vr8/P3////////29vf///////84qlf8wAdGiPX8/PzsUUTqQjQsqFLrSj3S3/w6g/TqPCs0gPQgpUf85+bv9P+63sL62Nb+8ef4ycbw+PJkunkeePP81HXwgGv0jhzc5/3o9efX7N5Fr19Uj/WQy562zPr2trL94KDzoJrzoJv80Gjyl5H94qgyh9v7xzihsSp+wYV1sE5ZtXBmmvUynoWKrvzKDGT6AAAAE3RSTlMAW+TTeBLcHLMt1WsKzfUznkBIxSDAuAAAAUZJREFUKJFtktligkAMRUFZxKVuDMOAggpu1apVu+/t//9TkxBU1PsySQ4hlyGadpTd0fWOrV2R3eqyWhe80j1RpYCc7pmcI2tyaZimQw6bOTMplU9hpKIofJSUmgwtTCYq9EFhqKIJ5lbGdGIRAGhUQLNX6wRLOA2Y8vdpuvfVOJtaOjhdhL56yYrjU8cGFsRSLc4/x+DPfxBiSZN6LMlXUYXzVghBT8/7pPkdxFX28yzEO8HYI8U9dlQudMZx3AeInWWe+SrExxrhCLTre3E+M3P7FXznLn887z53a2PwGbjBLLvUP2jcYUC/FYdOA9d1g22SbN1fbizT9bUxXA+QguB4G2GlfbIFqw1i0GCzKmzDDQ1LZgPQLKHk5rAJpmSj0ykH0jxArW4V79yqF1bMkEckjYvFrTWIy0btApFsx7m68Ff1D4OdMHbngtKsAAAAAElFTkSuQmCC" alt="구글 로그인" />
            </button>
          </div>
          <div class="col">
            <button @click="redirectToKakaoLogin" class="social-kakaologin-button">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAZlBMVEX/3AD/3QD/4gDtzAOEdBOfihHwzwP/3gDdvwsAAB94ahV+bhXuzgLlxgdnWxj/4wBjVxrCqAdAOhzXugb/4AAgIB4nJh2RfhRWTRqokw6bhxQ5NBwOEh/41gBzZhQUFh/Krw22ng2wHHIZAAAAj0lEQVR4AcXSRQLEIAwF0PxSd1f0/occ2Sftsji8DZDQmwVRBNFUnKSSZnlRqhus0jusnxDIREST5BKC2iKRsKuKvgGLaTcU4zQTj82yDh2xuDV7cXTE4zlcRRMJGKen3ptZ+j5jC6tm4SmzWd1mhKdgbgqXEBi0KqN50oufmWAHA4IJgcCkyYz/NM+gN8sXfaYIEEtXhS0AAAAASUVORK5CYII=" alt="카카오 로그인" />
            </button>
          </div>
          <div class="col">
            <button @click="redirectToNaverLogin" class="social-naverlogin-button">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAPFBMVEUD5mQD4GICyV0C0VwCwWED7WYDtmUDtWUD7mYDtGYDu2MC2V////9Y2YTh+uw5y3g54Hj+//+v7caf6bvvPHmAAAAACnRSTlP+////////5SsrBVeYDAAAAL5JREFUKJGNkAkSgyAMRUOgLmyK3v+uzYJtcWH6IoT5DxgHmOD1AEzw6MiyvPXA9QfmVEfcoS+D0VqJYEzgbmoGQUmxxLLSItMi1fArYyxZZDxLyzKW3VqRVkOwisgY1yqVk8yPstDYWolSLPNWd6QaAk38Jf5ZzHp5Qk0BFTmJy0cKrcS9lQ6p3CH14oSS0knn2PLzZVouhZ/PKVC7W4jf3kjvrgCnvpn8ZyP4Dn05DH7QcQXG21gYYX604/wGTF0TzKgJYlsAAAAASUVORK5CYII=" alt="네이버 로그인" />
            </button>
          </div>
        </div>
      </q-card-section>
      <q-card-section class="text-right">
        <q-btn flat label="아직 회원이 아니신가요?" @click="goTo('/signup')" />
        <q-btn flat label="비밀번호를 잊어버리셨나요?" @click="goTo('/send-password-code')" />
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import axios from "axios";


export default {
  data() {
    return {
      email: "",
      password: "",
      verificationCode: "", // 이메일 인증 코드 입력 필드
      role: "USER", // 기본값은 일반 사용자로 설정합니다.
      roleOptions: [
        { label: "일반 사용자", value: "USER" },
        { label: "관리자", value: "ADMIN" },
      ],
      accessToken: "", // 엑세스 토큰
      refreshToken: "" // 리프레시 토큰
    };
  },
  methods: {
    socialLogin(provider) {
      // 소셜 로그인 엔드포인트로 리다이렉트
      window.location.href = `http://localhost:8080/oauth2/login/${provider}`;
    },
    login() {
      const loginData = {
        email: this.email,
        password: this.password,
        verificationCode: this.verificationCode,
        role: this.role,
      };
      axios.post('http://localhost:8080/api/v1/users/login', loginData,{ withCredentials: true })
        .then(response => {
          // 응답 헤더에서 토큰 추출
          const authorizationHeader = response.headers['authorization'];
          console.log(response)
          const accessToken = authorizationHeader.split(' ')[1]; // Bearer 토큰을 제외하고 추출
          // 추출한 토큰을 쿠키 저장
          document.cookie = `Authorization=${accessToken}; path=/`;

          const { name } = response.data;
          alert(`${name}님 환영합니다!`);
          window.location.href = 'http://localhost:9000/#/main-layout';
        })
        .catch(error => {
          // 에러 응답 처리
          if (error.response) {
            // 응답이 있는 경우
            const status = error.response.status;
            if (status === 400) {
              // 잘못된 요청
              alert('이메일 또는 비밀번호 또는 인증번호를 확인해주세요.');
            } else if (status === 403) {
              // 접근 금지
              alert('해당 계정은 탈퇴 처리되었습니다.');
            } else {
              // 기타 에러
              console.error('로그인 요청에 실패했습니다.');
            }
          } else {
            // 응답이 없는 경우
            console.error('네트워크 오류입니다.');
          }
        });
    },
    redirectToNaverLogin() {
      // 네이버 소셜 로그인 엔드포인트로 리다이렉트
      this.socialLogin('naver');

    },
    redirectToKakaoLogin() {
      // 카카오 소셜 로그인 엔드포인트로 리다이렉트
      this.socialLogin('kakao');
    },
    redirectToGoogleLogin() {
      // 카카오 소셜 로그인 엔드포인트로 리다이렉트
      this.socialLogin('google');
    },



    goTo(path) {
      this.$router.push(path);
    },
  },
};
</script>

<style scoped>
/* 이미지를 감싸는 버튼 스타일 */
.social-login-button button {
  background-color: transparent;
  border: none; /* 네모칸을 없애는 스타일 */
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s; /* 호버 효과를 위한 CSS 트랜지션 추가 */
}

/* 호버 효과: 마우스를 올렸을 때 아이콘을 약간 확대 */
.social-login-button button:hover {
  transform: scale(1.1);
}

/* 이미지를 센터 정렬하는 스타일 */
img {
  display: block;
  margin: 10px; /* 이미지 간격 조정 */
  transition: filter 0.2s; /* 호버 효과를 위한 CSS 트랜지션 추가 */
}

/* 호버 효과: 마우스를 올렸을 때 이미지에 투명도 효과 추가 */
img:hover {
  filter: brightness(85%); /* 이미지의 밝기를 줄임 */
}

/* 각 소셜 로그인 버튼에 대한 배경색 및 여백 설정 */
.social-googlelogin-button,
.social-kakaologin-button,
.social-naverlogin-button {
  margin: 5px; /* 각 버튼 사이의 여백 조정 */
}

/* 각 소셜 로그인 버튼에 대한 배경색 및 둥근 테두리 설정 */
.social-googlelogin-button button,
.social-kakaologin-button button,
.social-naverlogin-button button {
  background-color: #ffffff; /* 버튼 배경색 */
  border-radius: 5px; /* 버튼 둥근 테두리 설정 */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* 그림자 효과 추가 */
}

/* 소셜 로그인 버튼 이미지 크기 및 여백 조정 */
.social-login-button button img {
  width: 100px; /* 이미지 폭 조정 */
  height: auto; /* 이미지 높이 자동 조정 */
}
</style>
