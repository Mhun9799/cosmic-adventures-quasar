<template>
  <div class="sub">
    <!-- 서브 헤더 시작 -->
    <header class="header sub__header" style="background-color: #000;">
      <h3 class="title">CONTACT</h3>
      <p class="text" style="color: #fff;">옵저버에 대해 궁금하신 사항을 문의하세요.</p>
    </header>

    <!-- 서브 컨텐츠 시작 -->
    <div class="container">
      <div class="sub__content__wr text-center" id="sub__contact__wr">
        <div class="inner__cen1400">
          <div class="sub__title__wr"></div>
          <div class="contact__contents__box">
            <div class="banner__wr">
              <div class="banner__text__wr">
                <p class="text">방문해주셔서 <br class="visible480">감사합니다.</p>
                <video id="myVideo" width="600" height="400" autoplay loop muted style="border-radius: 300px; overflow: hidden;">
                  <source src="https://videos.pexels.com/video-files/8474651/8474651-hd_1920_1080_30fps.mp4" type="video/mp4">
                  Your browser does not support the video tag.
                </video>
              </div>
              <div class="more__btn__wr">
                <svg xmlns="http://www.w3.org/2000/svg" width="22.414" height="50" viewBox="100 0 22.414 22">
                  <g id="arrow_icon" transform="translate(-1008 -1737)">
                    <g id="arrow_icon-2" data-name="arrow_icon" transform="translate(6 3)">
                      <path id="arrow" d="M1015.947,1737.715l8,8-8,8" transform="translate(-0.947 -0.715)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                      <line id="line" x1="20" transform="translate(1003 1745)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"/>
                    </g>
                    <rect id="영역" width="22" height="22" transform="translate(1008 1737)" fill="#fff" opacity="0"/>
                  </g>
                </svg>
              </div>
            </div>

            <div class="info__wr" >
              <div class="info__email">
                <div class="info__text">
                  <div class="text__wr">
                    <p class="title" style="display: flex; align-items: center;">
                      <img src="https://png.pngtree.com/png-vector/20190508/ourmid/pngtree-email-vector-icon-png-image_1027071.jpg" alt="email icon" width="50px" height="40px" style="margin-left: 250px;">
                      <a href="mailto:﻿cksahsla4@gmail.com" class="title" style="color: white;">cksahsla4@gmail.com</a>
                    </p>
                    <p class="text" style="color: white;">
                      메일로 문의를 주시면, 빠른 시간 내에 연락을 받아보실 수 있습니다.<br>
                      회신 받으실 이름과 연락처를 꼭 남겨주세요.
                    </p>
                  </div>
                </div>
              </div>
              <div class="info__tel">
                <div class="info__text">
                  <div class="text__wr">
                    <p class="title" style="display: flex; align-items: center;">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEDuNcoiHTKMLA91pcowwmfpji4sLGY_eog&s" alt="email icon" width="50px" height="40px" style="margin-left: 250px;">
                      <a href="tel:010-8351-3333" style="color: white;" class="title">010-8351-3333</a>
                    </p>
                    <p class="text" style="color: white;">
                      평일 09:00 ~ 18:00입니다. 최대한 연락을 받아서 문의사항을 처리 하도록 <br>노력하겠습니다. (점심시간 12:00 ~ 13:00)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const video = document.getElementById("myVideo");
    video.controls = false; // 컨트롤러 숨기기
    video.autoplay = true; // 자동 재생
  }
}
</script>

<style scoped>
.sub {
  font-family: Arial, sans-serif;
  color: #fff;
  background-color: #000; /* 배경색 검정으로 변경 */
}

.sub__header {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}

.container {
  margin: 20px auto;
  padding: 0 20px;
  background-color: #000; /* 흰색 배경 추가 */
}

.sub__content__wr {
  padding: 30px;
}

.info__wr {
  display: flex;
  justify-content: space-between;
}

.info__email,
.info__tel {
  width: 40%; /* 각 항목의 너비 조정 */
}

.title__wr img {
  margin-right: 10%;
}

.text__wr {
  display: flex;
  flex-direction: column;
}

.info__text {
  display: flex;
  flex-direction: column;
}

</style>
