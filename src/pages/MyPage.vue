<template>
  <q-page class="flex flex-center my-page">
    <div class="my-page-container q-pa-md">
      <!-- 프로필 이미지 -->
      <div class="rocket-background">
        <img :src="userProfile.profilePicUrl || defaultAvatar" alt="" class="profile-image" @click="openImageModal" style="cursor: pointer; max-width: 250px;" />
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
      </div>

      <!-- 이름 및 내용 -->
      <div class="profile-info">
        <div class="text-h4">{{ userProfile.name }}</div>
        <div class="text-body1">{{ userProfile.email }}</div>
        <div class="text-body1">{{ userProfile.tlno }}</div>
      </div>

      <!-- 소개 -->
      <div class="intro-section">
        <div class="text-body1">{{ userProfile.introduction }}</div>
      </div>

      <!-- 액션 버튼 -->
      <div class="actions-section">
        <!-- 액션 버튼 추가 -->
      </div>
    </div>

    <!-- 이미지 모달 -->
    <q-dialog v-model="showImageModal" persistent>
      <q-card>
        <q-card-section>
          <img :src="userProfile.profilePicUrl || defaultAvatar" alt="" style="max-width: 100%; height: auto;" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn label="닫기" color="primary" @click="closeImageModal" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- 에러 메시지 -->

  </q-page>
</template>

<script>
import axios from 'axios';
import { getAccessTokenFromCookie, refreshAccessToken, getRefreshTokenFromCookie } from 'src/Module/authModule';

export default {
  data() {
    return {
      userProfile: {
        name: '',
        email: '',
        introduction: '',
        profilePicUrl: '',
        tlno: ''
      },
      defaultAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
      showImageModal: false,
      errorMessage: '' // 에러 메시지
    };
  },

  mounted() {
    this.fetchUserProfile();
  },

  methods: {
    async fetchUserProfile() {
      try {
        const token = await getAccessTokenFromCookie();
        if (!token) {
          this.errorMessage = 'Access token not found in cookie.';
          return;
        }
        const response = await axios.get('http://localhost:8080/api/v1/users/profile', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const {
          name,
          email,
          introduction,
          profilePicUrl,
          tlno
        } = response.data;
        this.userProfile = {
          name: name || '',
          email: email || '',
          introduction: introduction || '',
          profilePicUrl: profilePicUrl && profilePicUrl.length > 0 ? profilePicUrl[0].replace(/"/g, '') : '',
          tlno: tlno || ''
        };
      } catch (error) {
        if (error.response && error.response.status === 400) {
          this.errorMessage = error.response.data.message;
        } else if (error.response && error.response.status === 401) {
          const refreshToken = await getRefreshTokenFromCookie();
          if (!refreshToken) {
            this.errorMessage = 'Refresh token not found in cookie.';
            return;
          }
          try {
            const newAccessToken = await refreshAccessToken(refreshToken);
            document.cookie = `Authorization=${newAccessToken}; path=/;`;
            await this.fetchUserProfile();
          } catch (error) {
            this.errorMessage = 'Error refreshing access token: ' + error.message;
            this.$router.push('/login');
          }
        } else {
          this.errorMessage = 'Error fetching user profile: ' + error.message;
        }
      }
    },
    // openImageModal, closeImageModal 메서드 등 나머지 메서드는 생략합니다.
  }
};
</script>

<style>
.my-page {
  background-color: #0D0D0D; /* 검은 배경색 */
}

.my-page-container {
  background-color: white; /* 흰색 배경 */
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 그림자 추가 */
  text-align: center; /* 가운데 정렬 */
}

.profile-image {
  margin-bottom: 20px; /* 프로필 이미지 아래 여백 추가 */
}

.profile-info {
  margin-left: auto;
  margin-right: auto;
  max-width: 400px;  /* 프로필 정보의 최대 너비 지정 */
}

.intro-section {
  margin-top: 20px; /* 소개 섹션과 다른 섹션 사이의 간격 설정 */
}

.actions-section {
  margin-top: 20px; /* 액션 버튼과 다른 섹션 사이의 간격 설정 */
}

/* 텍스트 색상 변경 */
.text-h4,
.text-body1,
.text-subtitle1 {
  color: black; /* 검은색 텍스트 */
}
</style>
