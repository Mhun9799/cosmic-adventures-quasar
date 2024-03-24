<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md my-page-container">
      <div class="profile-section">
        <q-avatar size="lg">
          <img :src="userProfile.profilePicUrl || defaultAvatar"  alt=""/>
        </q-avatar>
        <div>
          <div class="text-h6">{{ userProfile.name }}</div>
          <div class="text-caption">{{ userProfile.email }}</div>
        </div>
      </div>

      <div class="intro-section">
        <div class="text-subtitle1">{{ userProfile.introduction }}</div>
        <q-btn label="자기소개 수정" flat color="primary" @click="editIntroduction" />
      </div>

      <div class="actions-section">
        <q-btn label="내가 쓴 글" @click="goTo('myPosts')"/>
        <q-btn label="내가 쓴 댓글" @click="goTo('myComments')"/>
        <q-btn label="좋아요 누른 글" @click="goTo('likedPosts')"/>
      </div>
    </div>
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
        profilePicUrl: ''
      },
      defaultAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
    };
  },

  mounted() {
    this.fetchUserProfile();
  },

  methods: {
    fetchUserProfile() {
      const token = this.getAccessTokenFromCookie(); // 쿠키에서 엑세스 토큰 가져오기
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
          console.log(response);
          const { name, email, introduction, profilePicUrl } = response.data;
          this.userProfile = {
            name: name || '',
            email: email || '',
            introduction: introduction || '',
            profilePicUrl: profilePicUrl && profilePicUrl.length > 0 ? profilePicUrl[0].replace(/"/g, '') : ''
          };
        })
        .catch(error => console.error('Error fetching user profile:', error));
    },

    getAccessTokenFromCookie() {
      const cookie = document.cookie;
      const token = cookie.split('; ').find(row => row.startsWith('Authorization='));
      return token ? token.split('=')[1] : null;
    },

    editIntroduction() {
      // 소개를 수정하는 다이얼로그나 폼을 열기 위한 로직
    },

    goTo(routeName) {
      this.$router.push(`/mypage/${routeName}`);
    }
  }
};
</script>
