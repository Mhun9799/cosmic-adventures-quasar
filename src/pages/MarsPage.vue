<template>
  <div id="app">
    <div class="background-container">
      <img class="background-image" src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/443421f0-3739-4542-8b5e-e8d538584c69-%ED%99%94%EC%84%B1%EC%9D%B4%EB%AF%B8%EC%A7%80%EC%B6%94%EC%B6%9C.jpg" alt="">
      <div class="image-description">
        <h1 class="earth-title">Mars</h1>
        <p>화성은 영화와 소설의 소재로 많이 쓰이며, <br>
          태양계 행성 중 우리의 관심을 가장 많이 끈 행성이다.<br>
          지구에 가장 가까이 있고, <br>
          여러 가지 에피소드에 의해 생명의 존재 가능성이 제기되어<br>
          신비감과 공포감을 동시에 가져다 준 행성이 바로 화성이다.<br>
          이러한 관심은 마리너 6, 7, 8, 9호, 바이킹 1, 2 호 등<br>
          많은 우주선들이 화성을 탐사를 이끌어 냈고,<br>
          현재 화성에는 생명체가 없다는 것으로 알려지기는 했지만, <br>
          계속되는 생명체에 대한 관심과 제2의 지구라는 생각으로<br>
          여러 우주선들의 화성 탐사를 유도했다. <br>
          그리하여 화성에 대한 더 많은 자료를 확보함으로써 화성 연구에 많은 진척을 가져 왔고,<br>
          약 35억 년에서 25억 년 전쯤에 지표의 온도가 현재 지구 온도와 가까워졌고 <br>
          지금도 우주선들이 화성을 탐사하고 있다. <br>
          그리하여 35억 년 전에 비로소 지구에 원시 생명이 탄생한 것으로 추측하고 있다.</p>
        <div class="divider">
          <span class="line"></span><br>
          + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; + &ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash;&ndash; +
        </div>
        <div class="divider">
          <div class="text-container">
            <p>687일 ! </p>
            <p>화성은 태양 주위를 약 687일 동안 공전해요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>-80° ! </p>
            <p>화성의 평균온도는 약 -80°C예요.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>산화철 ! </p>
            <p>표면은 대부분 산화철로 전체적으로 붉게 보인다.</p>
            <p></p>
          </div>
          <div class="text-container">
            <p>생명체 x </p>
            <p>이산화 탄소,질소,아르곤,극미량의 산소</p>
          </div>
        </div>
        <div class="top-left-text">
          <p>둘레:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 약 21,326 Km</p>
          <p>지름:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 약 6,792 Km</p>
          <p>표면:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 주로 현무암과 안산암의 암석</p>
          <p>태양과의 거리:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.52 AU ( 1AU는149,597,870.7 km )</p>
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
