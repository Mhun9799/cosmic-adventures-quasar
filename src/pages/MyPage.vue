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
export default {
  data() {
    return {
      userProfile: {
        name: 'John Doe',
        email: 'johndoe@email.com',
        introduction: 'A short introduction about myself.',
        profilePicUrl: 'https://i.pravatar.cc/150?u=johndoe' // A placeholder image URL
      },
      defaultAvatar: 'https://cdn.quasar.dev/img/boy-avatar.png'
    };
  },

  methods: {
    editIntroduction() {
      // Logic to open a dialog or form to edit the introduction
    },
    goTo(routeName) {
      this.$router.push(`/mypage/${routeName}`);
    }
  },

  // ... (Add a method to fetch user profile data on page load )
};
</script>

<style scoped>
/* Add styling for layout and elements */
.my-page-container {
  width: 800px; /* Adjust the width as needed */
}
</style>
