<template>
  <div class="container">
    <!-- 액션 1(비주얼) -->
    <div class="visual__step01__wr visual__step__box" style="background-color: black;">
      <div class="video__bg">
        <!-- 이미지로 대체 -->
        <img
          src="https://images.pexels.com/photos/12498767/pexels-photo-12498767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="대체 이미지 설명">
        <!-- 프로필 사진과 소개글 -->
        <div class="profile__wrapper" style="background-color: black;">
          <div class="profile__item">
            <div class="profile__item kim__intro">
              <img
                src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/5f230e62-093c-4093-9204-82a1ef95c19a-%E3%85%81%E3%84%B4%E3%85%87%E3%85%81%E3%84%B4%E3%85%87%E3%85%81%E3%84%B4%E3%85%87%E3%85%81%E3%84%B4%E3%85%87%E3%85%81%E3%84%B4%E3%85%81%E3%84%B4%E3%85%87%E3%85%81%E3%84%B4%E3%85%87.jpg"
                alt="프로필 사진">
              <p>김찬모</p>
              <p>백엔드 개발자</p>
              <br>안녕하세요, 옵저버의 김찬모라고합니다.
              <br>벌써 마지막 프로젝트 라는게 시원섭섭합니다.
              <br>시간이 참 빠르다 느꼇습니다.
              <br>아직 많이 부족하고 잘 모르지만,
              <br>할 수있는 한 최선을 다해 만든 프로젝트입니다.
              <br>백이나 프론트나 많이 부족하지만
              <br>예쁘게 봐주시면 감사하겠습니다.
            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item beom__intro">
              <img
                src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/7370b9e4-62c5-4f04-80cc-3b5092f9fb9d-d09948ee008fdd4007af8b96316e549d.jpg"
                alt="프로필 사진">
              <p>변무훈</p>
              <p>백엔드 개발자</p>
              <br>옵저버의 변무훈입니다.
              <br>좋은 팀원들과 정말 즐거웠던 최종프로젝트였습니다.
              <br>6주 간의 시간이 어떻게 지나갔는지
              <br>모를 정도로 열과 성을 다해보았습니다.
              <br>부족한 점이 있더라도 예쁘게 봐주세요.
              <br>감사합니다.

            </div>
          </div>
          <div class="profile__item">
            <div class="profile__item park__intro">
              <img
                src="https://tobirobucket.s3.ap-northeast-2.amazonaws.com/profile/54c662f4-38e8-4e15-b9ca-cfc272a86fab-asdasdasdasdasd.jpg"
                alt="프로필 사진">
              <p>박현석</p>
              <p>백엔드 개발자</p>
              <br>오지 않을것만 같았던 마지막 프로젝트에
              <br>진한 발자국을 남기고 있네요.
              <br>길었던 여정을 지나, 고군분투하며 밤을 지새웠던 날들을 잊고,
              <br>마지막을 향해 더 힘차게 달려보겠습니다.
              <br>그럼 서비스를 즐겨주세요!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main__content__wr main__content__wr01">
      <!-- 액션 2(비주얼) -->
      <div class="visual__step02__wr visual__step__box">
        <div class="visual__step02__bg"></div>

        <div class="eclipse__box">
          <div class="eclipse__text__box">
            <p class="eclipse__title">이번 목적지는 옵저버 입니다.</p>
            <p class="eclipse__text hidden1024">
              천문우주 상상을 한 적이 있나요?<br>
              <br><br>
              우주에 대해 깊게 생각하고, 경험할 수 있는<br>
              <span class="sb">우주의 옵저버에 여러분을 초대합니다.</span>
            </p>
            <p class="eclipse__text visible1024">
              <span class="act__02">
                우주에 대해 깊게 생각하고,<br> 경험할 수 있는 <br>
                <span class="sb">ObServer<br>
                프로젝트에 여러분을 초대합니다.</span>
              </span>
            </p>
            <div class="scrolldown_icon">
              <div class="chevron"><img src="https://www.thespacekids.com/images/scroll_plz_icon.svg" alt=""></div>
              <div class="chevron"><img src="https://www.thespacekids.com/images/scroll_plz_icon.svg" alt=""></div>
            </div>
          </div>
          <div class="eclipse__action__box"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homePage"
}
</script>

<style scoped>
.container {
  position: relative;
}

.video__bg {
  position: relative;
  width: 100%;
  height: auto;
}

/* 수정된 부분 */
.video__bg img {
  width: 100%;
  height: auto;
  /* 흑백으로 변환하는 CSS filter 적용 */
  filter: grayscale(100%);
  /* 이미지 감도 조절 */
  -webkit-filter: brightness(0.3);
}

.eclipse__box {
  position: absolute;
  top: calc(20% + 0px); /* 이미지의 높이만큼 추가해서 텍스트 위치 조정 */
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.eclipse__text__box {
  color: #fff;
  max-width: 600px;
  margin: 0 auto;
}

.eclipse__title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.eclipse__text {
  font-size: 18px;
  line-height: 1.5;
}

.sb {
  font-weight: bold;
}

.scrolldown_icon {
  margin-top: 20px;
}

.scrolldown_icon .chevron {
  display: inline-block;
}

.scrolldown_icon .chevron img {
  width: 40px;
  height: auto;
}

/* 프로필 사진 스타일링 */
.profile__wrapper {
  display: flex;
  flex-direction: column; /* 요소들을 세로로 배치 */
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.profile__item {
  display: flex; /* Flexbox 사용하여 요소들을 가로로 배치 */
  flex-direction: column; /* 요소들을 세로로 배치 */
  align-items: center; /* 가로 중앙 정렬 */
  margin: 20px 0; /* 상하 여백 조정 */
  color: white; /* 흰색 텍스트 설정 */
  font-family: 'Noto Sans KR', sans-serif; /* 이쁜 글꼴로 변경합니다. */
}


.profile__item img {
  width: 300px; /* 프로필 사진 크기 설정 */
  height: 300px;
  border-radius: 50%; /* 원형으로 보이도록 설정 */
  margin-bottom: 10px;
}

.kim__intro {
  text-align: left;
  margin-right: 700px; /* 김찬모 소개를 오른쪽으로 조금 이동 */
}

.beom__intro {
  text-align: left;
  margin-left: 700px; /* 변무훈 소개를 왼쪽으로 조금 이동 */
}

.park__intro {
  text-align: left;
  margin-right: 700px; /* 박현석 소개를 오른쪽으로 조금 이동 */
}

.kim__intro img,
.beom__intro img,
.park__intro img {
  filter: none; /* 프로필 사진에 대한 필터 제거 */
  -webkit-filter: none;
}
</style>
