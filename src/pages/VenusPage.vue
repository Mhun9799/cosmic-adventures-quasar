<template>
  <div id="app">
    <div class="background-container">
      <img class="background-image" src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/9eaa6189-872a-41cf-936d-594d59988d3c-%EA%B8%88%EC%84%B1%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%B6%94%EC%B6%9C.jpg" alt="">
      <div class="image-description">
        <h1 class="earth-title">Venus</h1>
        <p> 금성은 우리가 흔히 '샛별' 이라고 부르는 행성으로<br>
          해 뜨기 전 동쪽 하늘이나 해진 후 서쪽 하늘에서 보인다. <br>
          금성은 그냥 보면 하나의 점처럼 보이지만, <br>
          망원경으로 보면 달처럼 그 모습이 변하는 위상을 가지고 있다. <br>
          금성의 대기는 두꺼운 이산화탄소로 덮여 있기 때문에 <br>
          망원경으로는 표면이 보이지 않는다.  <br>
          그래서 관측을 파장이 긴 전파를 사용하고 있다.<br>
          금성은 탄생한 직 후 미행성과 여러 번 충돌했을 것이다.<br>
          이로 인해 지표가 가열되고, <br>
          휘발성이 강한 수증기와 일산화탄소가 활발히 증발했고<br>
          , 그 후 수증기와 일산화탄소를 주성분으로 한 금성의 원시 대기가 만들어진다.</p>
        <div class="divider">
          <span class="line"></span><br>
          + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; +
        </div>
        <div class="divider">
          <div class="text-container">
            <p>지구의 95% 크기 !</p>
            <p>금성은 지구와 비슷한 크기</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>225일 ! </p>
            <p>금성의 공전 주기는 225일</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>Venus !</p>
            <p>로마 신화 여신인 베누스의 명칭</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>470℃ !</p>
            <p>금성에 표면온도는 약 470℃</p>
          </div>
        </div>
        <div class="top-left-text">
          <p>둘레:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 38,025 Km</p>
          <p>지름:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 12,104 Km</p>
          <p>표면:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;독특한 지형과 화산활동으로 유명</p>
          <p>태양과의 거리:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 1억 600만 km</p>
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
