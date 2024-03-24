<template>
  <div id="mapContainer">
    <div id="map"></div>
    <div id="imageOverlay"></div>
    <div id="astronautInfoContainer">
      <div class="astronaut-title">ISS 우주 비행사</div>
    <div v-for="astronaut in astronauts" :key="astronaut.name" class="astronaut-info">
      <div class="astronaut-name">{{ astronaut.name }}</div>
    </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'; // Leaflet 라이브러리 import
import 'leaflet/dist/leaflet.css';
import axios from "axios"; // Leaflet CSS import

export default {
  data() {
    return {
      intervalId: null, // setInterval의 ID를 저장할 변수
      astronauts: []
    };
  },
  mounted() {
    this.initializeMap();
    this.startUpdatingISSLocation(); // ISS 위치 업데이트 시작
    this.getAstronauts();
  },
  methods: {
    initializeMap() {
      this.map = L.map('map').setView([0, 0], 3);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.issIcon = L.icon({
        iconUrl: 'https://tle.ivanstanojevic.me/images/satellite.svg',
        iconSize: [50, 30],
        iconAnchor: [25, 15]
      });

      this.marker = L.marker([0, 0], {icon: this.issIcon}).addTo(this.map);
      this.updateISSLocation();
    },

    updateISSLocation() {
      fetch('http://api.open-notify.org/iss-now.json')
        .then(response => response.json())
        .then(data => {
          const latitude = parseFloat(data.iss_position.latitude);
          const longitude = parseFloat(data.iss_position.longitude);
          this.marker.setLatLng([latitude, longitude]);
          this.map.setView([latitude, longitude]);
        })
        .catch(error => console.error('Error fetching ISS location:', error));
    },

    startUpdatingISSLocation() {
      this.intervalId = setInterval(this.updateISSLocation, 5000);
    },

    stopUpdatingISSLocation() {
      clearInterval(this.intervalId);
    },
    async getAstronauts() {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/iss/astronauts');
        console.log(response)// 우주 비행사 정보를 가져오는 API 엔드포인트 호출
        this.astronauts = response.data; // 가져온 데이터를 변수에 저장
      } catch (error) {
        console.error('Error fetching astronauts:', error);
      }
    }
  },
  beforeUnmount() {
    this.stopUpdatingISSLocation();
  }
}
</script>

<style scoped>
#mapContainer {
  height: 100vh; /* 화면 전체 높이로 설정 */
  display: flex; /* Flexbox를 사용하여 자식 요소를 배치 */
  flex-direction: column; /* 세로 방향으로 자식 요소를 배치 */
}

#map {
  flex: 1; /* 지도가 남은 공간을 모두 차지하도록 설정 */
}

#imageOverlay {
  height: 50vh; /* 화면 아래 절반의 높이 설정 */
  background-image: url('https://www.nasa.gov/wp-content/uploads/2023/05/exp70-portrait.jpg?resize=2000,1600'); /* 이미지 경로 */
  background-size: contain; /* 이미지를 컨테이너에 맞춰서 비율을 유지하며 조정 */
  background-repeat: no-repeat; /* 이미지 반복 없음 */
  background-position: left; /* 이미지를 가운데 정렬 */
}
#astronautInfoContainer {
  flex: 1; /* 남은 공간을 모두 차지하도록 설정 */
  overflow-y: auto; /* 우주 비행사 정보가 넘칠 경우 스크롤 생성 */
  padding: 20px; /* 여백 설정 */
  box-sizing: border-box; /* 패딩과 보더를 요소의 크기에 포함시키도록 설정 */
  margin-left: calc(30%); /* 우주 비행사 정보를 오른쪽으로 살짝 이동 */
  margin-top: -23%; /* 위로 조금 이동 */
}

.astronaut-info {
  margin-bottom: 10px; /* 각 우주 비행사 정보 아이템 아래 여백 설정 */
}

.astronaut-name {
  font-weight: bold;
  font-style: italic;/* 우주 비행사 이름의 텍스트 굵기 설정 */
}
.astronaut-title {
  font-size: 24px; /* 타이틀 폰트 크기 설정 */
  font-weight: bold; /* 타이틀 폰트 굵기 설정 */
  margin-bottom: 20px; /* 타이틀과 우주 비행사 정보 간의 간격 설정 */
}
</style>
