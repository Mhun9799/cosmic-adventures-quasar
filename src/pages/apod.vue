<template>
  <div :class="{ 'loading': loading }" class="nasa-apod-container">
    <h1 class="nasa-apod-title">{{ loading ? '로딩 중...' : nasaImage.title }}</h1>
    <p class="nasa-apod-explanation" v-if="!loading">{{ nasaImage.explanation }}</p>
    <div class="image-container" v-if="!loading">
      <img :src="nasaImage.url" alt="NASA Image" class="nasa-apod-image">
    </div>
    <p v-if="error" class="error-message">이미지를 불러오는 중에 오류가 발생했습니다.</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "NasaApod",
  data() {
    return {
      nasaImage: {},
      loading: true,
      error: false
    };
  },
  mounted() {
    this.fetchNasaImage();
  },
  methods: {
    async fetchNasaImage() {
      try {
        const response = await axios.get('http://dearforbearance.com/api/v1/nasa/apod');
        this.nasaImage = response.data;
        this.loading = false; // 이미지 로딩이 완료되면 로딩 상태 변경
        console.log(response);
      } catch (error) {
        console.error('Error fetching NASA image:', error);
        this.loading = false; // 오류 발생 시 로딩 상태 변경
        this.error = true; // 오류 발생 시 에러 상태 변경
      }
    }
  }
}
</script>

<style scoped>
body {
  margin: 0; /* body 요소의 margin을 0으로 설정하여 전체 화면을 채움 */
}

.nasa-apod-container {
  background-color: #000;
  color: #fff; /* 텍스트 색상을 흰색으로 설정 */
  padding: 150px; /* 내부 여백 추가 */
  text-align: center; /* 텍스트와 이미지를 가운데 정렬 */
  height: 100vh; /* 페이지 전체 높이 */
}

.nasa-apod-title {
  font-size: 24px; /* 제목의 글꼴 크기를 키움 */
  margin-bottom: 10px; /* 제목 아래 여백 추가 */
}

.nasa-apod-explanation {
  font-size: 18px; /* 설명 텍스트의 글꼴 크기를 설정 */
}

.image-container {
  display: inline-block; /* 이미지 컨테이너를 인라인 블록으로 설정하여 가운데 정렬 */
}

.nasa-apod-image {
  max-width: 50%; /* 이미지의 최대 너비를 50%로 설정하여 컨테이너에 맞게 크기 조정 */
  height: auto; /* 이미지의 높이를 자동으로 설정하여 가로세로 비율 유지 */
  margin-top: 20px; /* 이미지 위 여백 추가 */
  border-radius: 40px; /* 이미지 모서리를 둥글게 만듦 */
}
</style>
