<template>
  <q-page class="flex flex-center my-page">
    <div class="my-page-container q-pa-md">
      <div class="profile-section">
        <q-avatar size="lg">
          <img :src="userProfile.profilePicUrl || defaultAvatar" alt="" @click="openImageModal" style="cursor: pointer; max-width: 150px;" />
        </q-avatar>
        <div class="profile-info">
          <div class="text-h6">{{ userProfile.name }}</div>
          <div class="text-caption">{{ userProfile.email }}</div>
          <div class="text-caption">{{ userProfile.tlno }}</div>
        </div>
      </div>

      <div class="intro-section">
        <div class="text-subtitle1">{{ userProfile.introduction }}</div>
      </div>

      <div class="actions-section">
        <q-btn label="내가 쓴 글" @click="goTo('MyPosts')" />
        <q-btn label="내가 쓴 댓글" @click="goTo('myComments')" />
        <q-btn label="좋아요 누른 글" @click="goTo('likedPosts')" />
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
    fetchUserProfile() {
      const token = this.getAccessTokenFromCookie();
      if (!token) {
        console.error('Access token not found in cookie.');
        return;
      }
      axios.get('http://localhost:8080/api/v1/users/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          const {
            name,
            email,
            introduction,
            profilePicUrl,
            tlno
          } = response.data; //
          this.userProfile = {
            name: name || '',
            email: email || '',
            introduction: introduction || '',
            profilePicUrl: profilePicUrl && profilePicUrl.length > 0 ? profilePicUrl[0].replace(/"/g, '') : '',
            tlno: tlno || ''
          };
        })
        .catch(error => console.error('Error fetching user profile:', error));
    },

    getAccessTokenFromCookie() {
      const cookie = document.cookie;
      const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
      return token ? token.split('=')[1] : null;
    },


    goTo(routeName) {
      this.$router.push(`/${routeName}`);
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
  background-color: #0D0D0D; /* 배경색을 우주 공간과 어울리는 검은색으로 설정 */
}

.my-page-container {
  background-color: rgba(255, 255, 255, 0.8); /* 프로필 컨테이너를 투명하게 만들어 우주적인 느낌을 줌 */
  border-radius: 10px; /* 컨테이너의 모서리를 부드럽게 만듦 */
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
</style>
