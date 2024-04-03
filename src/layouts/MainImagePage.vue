<template>
  <div class="full-screen-video-container">
    <!-- 동영상을 채울 부분 -->
    <div class="video-wrapper">
      <video autoplay loop muted class="full-screen-video">
        <source src="https://videos.pexels.com/video-files/7169950/7169950-hd_1080_2048_25fps.mp4" type="video/mp4">
      </video>
      <!-- 로고 이미지 -->
      <img src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/571028fc-7fc0-43dd-8640-7b27b30b75e9-%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202024-03-29%20%EC%98%A4%ED%9B%84%209.00.17.png" alt="로고 이미지" class="logo-image">
      <!-- 입장하기 버튼 -->
      <button @click="goToMainLayout" class="enter-button" style="position: absolute; top: 20px; right: 20px;">입장하기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FullScreenVideoPage",
  methods: {
    goToMainLayout() {
      // 주어진 경로로 이동하는 코드
      this.$router.push('/Home'); // 수정: '/Home' 경로로 이동하도록 수정
    }
  }
}
</script>

<style scoped>
/* 전체 화면에 검정색 배경을 적용합니다. */
.full-screen-video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  display: flex; /* 아이템들을 가운데로 정렬하기 위해 flex를 사용합니다. */
  justify-content: center; /* 아이템들을 수평으로 가운데 정렬합니다. */
  align-items: center; /* 아이템들을 수직으로 가운데 정렬합니다. */
  animation: fadeIn 2s ease-in-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.video-wrapper {
  position: relative; /* 상대적 위치를 설정합니다. */
  width: 50vw; /* 화면 전체 너비의 50%로 설정합니다. */
  height: 100%; /* 화면 전체 높이에 맞게 설정합니다. */
}

.full-screen-video {
  width: 100%; /* 비디오의 너비를 100%로 설정하여 부모 요소에 맞춥니다. */
  height: 100%; /* 비디오의 높이를 100%로 설정하여 부모 요소에 맞춥니다. */
  object-fit: cover; /* 비디오를 화면에 꽉 채우도록 설정합니다. */
}

.logo-image {
  position: absolute;
  top: 20px;
  left: 20px;
  width: 100px; /* 로고 크기 조정 */
  height: auto;
  z-index: 10; /* 로고가 동영상 위에 오도록 z-index 값 조정 */
  opacity: 0.9; /* 로고 투명도 조정 */
  border-radius: 10px; /* 로고 모서리 둥글게 */
}

.enter-button {
  padding: 15px 30px; /* 버튼의 크기를 조정합니다 */
  font-size: 1.2em; /* 글씨 크기를 조정합니다 */
  color: #fff; /* 글씨 색상을 흰색으로 합니다 */
  background-color: #007bff; /* 버튼의 배경색을 설정합니다 */
  border: none; /* 테두리를 제거합니다 */
  border-radius: 5px; /* 모서리를 둥글게 합니다 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); /* 그림자 효과를 추가합니다 */
  transition: all 0.3s; /* 부드러운 전환 효과를 위해 transition을 추가합니다 */
  cursor: pointer; /* 마우스 오버 시 커서를 변경합니다 */
}

.enter-button:hover {
  background-color: #0056b3; /* 마우스 오버 시 버튼의 배경색을 변경합니다 */
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.5); /* 마우스 오버 시 그림자 효과를 강조합니다 */
}

.enter-button:active {
  transform: translateY(2px); /* 클릭 시 버튼이 약간 아래로 움직이는 효과를 줍니다 */
}
</style>
