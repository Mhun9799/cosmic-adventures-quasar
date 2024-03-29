<template>
  <q-page class="flex flex-center my-page">
    <div class="my-page-container q-pa-md">
      <div class="profile-section">
        <q-avatar size="xl">
          <img :src="userProfile.profilePicUrl || defaultAvatar" alt="" @click="openImageModal" style="cursor: pointer; max-width: 200px;" />
        </q-avatar>
        <div class="profile-info">
          <div class="text-h4">{{ userProfile.name }}</div>
          <div class="text-body1">{{ userProfile.email }}</div>
          <div class="text-body1">{{ userProfile.tlno }}</div>
        </div>
      </div>

      <div class="intro-section">
        <div class="text-h6">한마디</div>
        <div class="text-body1">{{ userProfile.introduction }}</div>
      </div>

      <div class="actions-section">
      </div>
    </div>

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
  </q-page>
</template>

<script>
import axios from 'axios';
import {getAccessTokenFromCookie, refreshAccessToken, getRefreshTokenFromCookie} from 'src/Module/authModule'; // auth 모듈 임포트

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
      showImageModal: false
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
          console.error('Access token not found in cookie.');
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
        if (error.response && error.response.status === 401) {
          const refreshToken = await getRefreshTokenFromCookie();
          if (!refreshToken) {
            console.error('Refresh token not found in cookie.');
            return;
          }
          try {
            const newAccessToken = await refreshAccessToken(refreshToken);
            document.cookie = `Authorization=${newAccessToken}; path=/;`;
            await this.fetchUserProfile();
          } catch (error) {
            console.error('Error refreshing access token:', error);
            this.$router.push('/login');
          }
        } else {
          console.error('Error fetching user profile:', error);
        }
      }
    },


    openImageModal() {
      this.showImageModal = true;
    },

    closeImageModal() {
      this.showImageModal = false;
    },
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
}

.profile-section {
  display: flex;
  align-items: center;

}

.profile-info {
  margin-left: 20px; /* 프로필 정보와 아바타 사이의 간격 설정 */
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
