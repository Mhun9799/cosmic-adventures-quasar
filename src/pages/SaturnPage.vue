<template>
  <div id="app">
    <div class="background-container">
      <img class="background-image" src="https://flexible.img.hani.co.kr/flexible/normal/924/554/imgdb/child/2023/0701/53_16881715308655_20230701500194.jpg" alt="">
      <div class="image-description">
        <h1 class="earth-title">Saturn</h1>

        <p>토성은 아름다운 고리를 가진 행성으로 많은 사랑을 받는 행성이다. <br>
          토성의 고리는 1610년 갈릴레이에 의해 처음 관측되었다. <br>
          하지만 망원경의 해상도가 낮아 확실한 모양을 몰랐다.<br>
          훗날 그가 죽은 뒤 약 50년 후인 1656년 네덜란드의 천문학자인 <br>
          호이겐스(Christiaan Huygens)에 의해 그것이 고리라는 것이 밝혀졌다. <br>
          토성의 신비는 태양계 탐사 우주선 보이저(voyager) <br>
          1,2호에 의해 많이 밝혀졌다.<br>
          지금까지 밝혀진 토성의 위성은 수십 개이며,  <br>
          그 가운데 신비한 위성 타이탄(titan)이 있다. <br>
          이 위성은 태양계의 다른 위성 중에서는 보기 힘든 짙은 대기로 감싸여 있다.</p>
        <div class="divider">
          <span class="line"></span><br>
          + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; +
        </div>
        <div class="divider">
          <div class="text-container">
            <p>두번 째 ! </p>
            <p>토성은 목성에 이어 태양계에서 두 번째로 커요</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>-176°C ! </p>
            <p>토성의 표면의 온도는 약 -176°C로 아주 낮아요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>763배 !</p>
            <p> 지구보다 763배나 큰 행성이에요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>강련한전파방출!</p>
            <p>용의 폭풍이라는 현상도 존재해요.</p>
          </div>
        </div>
        <div class="top-left-text">
          <p>둘레:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 378,675 Km</p>
          <p>지름:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;약 116,460 Km</p>
          <p>표면:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;가스 행성으로 구성 물질 대부분이 기체</p>
          <p>태양과의 거리:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 약 14억 km</p>
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
