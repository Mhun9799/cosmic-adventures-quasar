<template>
  <div class="main-image-container">
    <!-- 이미지를 채울 부분 -->
    <img src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/ec9ee40f-5b48-4279-bc62-9767e9e8030b-%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-03-29%20%EC%98%A4%ED%9B%84%209.00.17.png" alt="Main Image" class="main-image">

    <!-- 입장하기 버튼 -->
    <button @click="enterMainLayout" class="enter-button">입장하기</button>
  </div>
</template>

<script>
export default {
  name: "MainImagePage",
  methods: {
    enterMainLayout() {
      // MainLayout 페이지로 이동하는 코드
      this.$router.push('/main-layout');
    }
  }
}
</script>

<style scoped>
/* 전체 화면에 검정색 배경을 적용합니다. */
.template {
  background-color: black;
}

.main-image-container {
  position: relative;
  width: 100%;
  height: 100vh; /* 화면 전체 높이의 95%만 사용합니다. */
  display: flex; /* 아이템들을 가운데로 정렬하기 위해 flex를 사용합니다. */
  justify-content: center; /* 아이템들을 수평으로 가운데 정렬합니다. */
  align-items: center; /* 아이템들을 수직으로 가운데 정렬합니다. */
  background-color: black;
}


.main-image {
  width: auto; /* 이미지의 가로 크기를 자동으로 조정합니다. */
  height: 60%; /* 이미지의 높이를 화면의 60%로 설정합니다. */
  object-fit: contain; /* 이미지를 비율 유지하며 채우도록 설정합니다. */
  border-radius: 20px; /* 이미지를 둥글게 만듭니다. */
}

.enter-button {
  margin-top: 20px; /* 버튼과 이미지 사이에 간격을 조정합니다. */
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px; /* 버튼을 둥글게 만듭니다. */
  cursor: pointer;
}
</style>
