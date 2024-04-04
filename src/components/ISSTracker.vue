<template>
  <div id="mapContainer">
    <div id="map"></div>
    <div id="content">
      <h2>ISS 현재 위치</h2>
      <p>국제우주정거장의 현재 위치를 실시간으로 움직임을 확인할 수 있습니다.</p>
      <div id="astronautInfo">
        <button class="toggle-button" @click="toggleAstronautInfo">실제 ISS 비행사 정보</button>
        <div v-if="showAstronautInfo" class="astronaut-info">
          <div class="astronaut">
            <img :src="astronauts.length > 0 ? astronauts[0].image : ''" alt="Astronaut Image" class="astronaut-image">
            <div v-for="(astronaut, index) in astronauts" :key="index" class="astronaut-name">{{ astronaut.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import L from 'leaflet'; // Leaflet 라이브러리 import
import 'leaflet/dist/leaflet.css';
import axios from "axios";

export default {
  data() {
    return {
      map: null,
      marker: null,
      intervalId: null,
      showAstronautInfo: false,
      astronauts: []
    };
  },
  mounted() {
    this.initializeMap();
    this.startUpdatingISSLocation();
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
    async toggleAstronautInfo() {
      if (!this.showAstronautInfo) {
        try {
          const response = await axios.get('http://dearforbearance.com/api/v1/iss/astronauts');
          this.astronauts = response.data.map(astronaut => ({
            name: astronaut.name,
            image: 'https://www.nasa.gov/wp-content/uploads/2023/05/exp70-portrait.jpg?resize=2000,1600'
          }));
          this.showAstronautInfo = true;
        } catch (error) {
          console.error('Error fetching astronauts:', error);
        }
      } else {
        this.showAstronautInfo = false;
      }
    }
  },
  beforeUnmount() {
    this.stopUpdatingISSLocation();
  }
};
</script>

<style scoped>
#mapContainer {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: black; /* 배경색 검정색으로 설정 */
}

#map {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 70%;
}

#content {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  text-align: center;
  color: white; /* 글씨색 하얀색으로 설정 */
}

#content h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

#content p {
  font-size: 16px;
}

#astronautInfo {
  position: absolute;
  top: 30px;
  right: 20px;
}

.toggle-button {
  margin-bottom: 10px;
  margin-top: 62px;
}

.astronaut-info {
  text-align: left;
}

.astronaut {
  margin-bottom: 20px;
}

.astronaut-name {
  font-weight: bold;
}

.astronaut-image {
  width: 200px; /* 이미지 너비 설정 */
  height: auto; /* 이미지 높이 자동 설정 */
  margin-top: 10px; /* 위쪽 여백 설정 */
}
</style>
