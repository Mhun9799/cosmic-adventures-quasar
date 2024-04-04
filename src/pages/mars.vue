<template>
  <div class="mars-rover-container">
    <!-- 제목과 내용을 이미지 컨테이너 위에 배치 -->
    <h2 class="title">Mars Rover Image</h2>
    <p class="description">로봇 이름: {{ marsRoverData ? marsRoverData.roverName : '데이터를 불러오는 중입니다...' }}</p>
    <p class="description">카메라 이름: {{ marsRoverData ? marsRoverData.cameraName : '데이터를 불러오는 중입니다...' }}</p>
    <div class="image-container">
      <img :src="marsRoverData ? marsRoverData.imgSrc : ''" alt="Mars Rover Image" v-if="marsRoverData" class="mars-rover-image" />
      <div class="image-overlay" v-if="marsRoverData">
        <p class="overlay-text">{{ marsRoverData.earthDate }}에 찍힌 사진입니다.</p>
      </div>
    </div>
    <p v-if="!marsRoverData" class="loading-message">데이터를 불러오는 중입니다...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MarsRover",
  data() {
    return {
      marsRoverData: null
    };
  },
  mounted() {
    this.fetchMarsRoverData();
  },
  methods: {
    fetchMarsRoverData() {
      axios.get("http://dearforbearance.com/api/v1/mars-rovers/recent")
        .then(response => {
          this.marsRoverData = response.data;
        })
        .catch(error => {
          console.error("Error fetching Mars Rover data:", error);
        });
    }
  }
};
</script>

<style scoped>
/* 이미지 컨테이너를 중앙에 배치 */
.mars-rover-container {
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* 컨테이너 안의 요소들이 세로로 배치되도록 설정 */
  height: 100vh; /* 페이지 전체 높이로 설정 */
}

/* 이미지를 중앙에 배치하고 컨테이너에 맞춤 */
.image-container {
  position: relative;
  text-align: center;
  max-width: 80%; /* 이미지 컨테이너의 최대 너비를 설정합니다. */
  width: 600px; /* 이미지 컨테이너의 폭을 고정 크기로 설정합니다. */
  height: 600px; /* 이미지 컨테이너의 높이를 고정 크기로 설정합니다. */
  overflow: hidden; /* 이미지가 컨테이너를 벗어나는 것을 방지합니다. */
}

.mars-rover-image {
  width: 100%; /* 이미지가 컨테이너 너비에 맞춰 표시됩니다. */
  height: auto; /* 이미지의 높이를 자동으로 설정하여 가로세로 비율 유지 */
  display: block;
  margin: 0 auto;
  border-radius: 20px; /* 이미지 모서리를 둥글게 만듭니다. */
}

/* 이미지 위에 텍스트를 배치 */
.image-overlay {
  position: absolute;
  bottom: 10px; /* 이미지의 하단에서 10px 떨어진 위치로 배치합니다. */
  left: 50%; /* 이미지 중앙에서 왼쪽으로 이동 */
  transform: translateX(-50%); /* 이미지 중앙 정렬 */
  background-color: rgba(255, 255, 255, 0.7); /* 텍스트 배경색과 투명도 조절 */
  padding: 10px; /* 텍스트 주변 여백 설정 */
  border-radius: 10px; /* 텍스트 상자 모서리를 둥글게 만듭니다. */
}

/* 로딩 중인 경우 화면에 메시지를 중앙에 배치 */
.loading-message {
  text-align: center;
}

.overlay-text {
  margin: 5px 0; /* 제목과 내용 사이의 간격 조정 */
}

/* 제목과 내용 스타일 */
.title {
  font-size: 24px;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  margin-bottom: 5px;
}
</style>
