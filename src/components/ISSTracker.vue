<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet'; // Import Leaflet
import 'leaflet/dist/leaflet.css'; // Import Leaflet CSS

export default {
  mounted() { // Use the 'mounted' lifecycle hook
    this.initializeMap();
  },
  methods: {
    initializeMap() {
      this.map = L.map('map').setView([0, 0], 3);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      }).addTo(this.map);

      this.issIcon = L.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/ISS-Location_Logo.svg',
        iconSize: [50, 30],
        iconAnchor: [25, 15]
      });

      this.marker = L.marker([0, 0], { icon: this.issIcon }).addTo(this.map);
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
    }
  }
}
</script>

<style scoped>
#map {
  height: 500px;
  width: 100%;
}
</style>
