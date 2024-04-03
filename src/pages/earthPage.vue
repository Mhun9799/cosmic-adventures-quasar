<template>
  <div id="app">
    <div class="background-container">
      <img class="background-image" src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/4503d5d8-f83d-49de-b064-44603e017221-image%20%281%29.jpg" alt="">
      <div class="image-description">
        <h1 class="earth-title">Earth</h1>
        <p>현재 지구의 나이는 약 46억 년이라고 알려져 있으며, <br>
          원시 태양 주위에 있던 엄청난 수의 미행성이 충돌, <br>
          뭉쳐져서 원시 지구를 탄생시켰을 것이다.<br>
          탄생 직후의 지구는 고온의 마그마 바다였으나 미행성의 충돌이 잠잠해지면서 <br>
          냉각하기 시작하고 얇은 지각이 형성되었다. <br>
          그리고 이산화탄소가 주성분이었던 원시 대기에 비가 내림으로써 바다가 형성되고, <br>
          이산화탄소가 바다에 녹아 하늘이 맑아졌을 것이다.<br>
          약 35억 년에서 25억 년 전쯤에 지표의 온도가 현재 지구 온도와 가까워졌고 <br>
          지구 환경도 안정기에 접어들었다. <br>
          그리하여 35억 년 전에 비로소 지구에 원시 생명이 탄생한 것으로 추측하고 있다.</p>
        <div class="divider">
          <span class="line"></span><br>
          + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; +
        </div>
        <div class="divider">
          <div class="text-container">
            <p>365.26! </p>
            <p>지구는 태양 주위를 365.26 일 동안 공전해요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>71% ! </p>
            <p>지구 표면은 71%물로 덮여 있어요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>41억!</p>
            <p>생명은 41억 년 전에 생겨났을 수 있어요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>76억 명!</p>
            <p>76억 명 이상의 사람이 살고 있어요.</p>
          </div>
        </div>
        <div class="top-left-text">
          <p>둘레:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 40,075.16 Km</p>
          <p>지름:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 12,742 Km</p>
          <p>표면:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;바다 71 %, 대륙 및 섬 29 %</p>
          <p>태양과의 거리:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;149,598,023 km</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 컴포넌트 코드...
};
</script>

<style>
#app {
  font-family: sans-serif;
  text-align: center;
}

.background-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}

.image-description {
  position: absolute;
  top: 40%;
  left: 29%;
  transform: translate(-50%, -50%);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: white;
}

.earth-title {
  font-size: 120px;
  font-weight: bold;
}

.image-description p {
  font-size: 16px;
}

.divider .line {
  border-top: 1px solid white;
}
.divider {
  display: flex;
  justify-content: space-between;
  margin-right: -650px;
  margin-top: 110px;
  color: white;
}

.text-container {
  margin-top: -80px;
  text-align: center;
  margin-right: -170px;
}

.top-left-text {
  color: rgba(255, 255, 255, 0.7); /* 투명한 흰색으로 설정 */
  position: absolute;
  top: 350px;
  left: 1200px;
  width: 350px; /* 텍스트 컨테이너의 너비 조정 */
  font-size: 18px; /* 폰트 크기 키우기 */
  font-weight: bold; /* 폰트 굵게 설정 */
  text-align: left; /* 텍스트를 왼쪽으로 정렬 */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* 그림자 추가 */
}
</style>
