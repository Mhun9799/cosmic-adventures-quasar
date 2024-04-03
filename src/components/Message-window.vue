<template>
  <div class="message-window">
    <!-- X 아이콘 추가 -->
    <div class="close-button" @click="closeModal">✖️</div>
    <h2 class="message-title">📧 편지 보내기</h2>
    <input type="text" v-model="title" placeholder="제목" class="message-input" />
    <textarea v-model="content" placeholder="편지 내용을 입력하세요" class="message-content"></textarea>
    <input type="text" v-model="receiverName" placeholder="받는 사람의 닉네임" class="message-input" />
    <q-btn color="primary" label="전송" @click="sendMessage" class="send-button"/>
  </div>
</template>

<script>
import {Cookies} from "quasar";
import axios from 'axios';
import {refreshAccessToken} from 'src/Module/authModule';

export default {
  data() {
    return {
      title: "",
      content: "",
      receiverName: "",
      hasAccessToken: true // 엑세스 토큰 여부를 나타내는 변수 추가
    };
  },
  methods: {
    async sendMessage() {
      let storedToken = Cookies.get("Authorization");
      if (!storedToken) {
        this.hasAccessToken = false; // 엑세스 토큰이 없음을 표시
        console.error("엑세스 토큰이 없습니다.");
        return;
      }

      try {
        const response = await axios.post('http://localhost:8080/api/v1/messages', {
          title: this.title,
          content: this.content,
          receiverName: this.receiverName
        }, {
          headers: {
            'Authorization': `Bearer ${storedToken}`
          }
        });

        console.log(response.data);
        this.clearFields();
        // 전송 완료 후 알림을 띄웁니다.
        alert("💌 전송이 완료되었습니다.");
        // 쪽지 보내는 창을 닫습니다.
        this.$emit('close');
      } catch (error) {
        console.error('쪽지 전송 중 오류 발생:', error);
        if (error.response && error.response.status === 401) {
          // 만료된 액세스 토큰이라면 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청합니다.
          try {
            storedToken = await refreshAccessToken();
            // 다시 시도합니다.
            await this.sendMessage();
          } catch (refreshError) {
            console.error('액세스 토큰 리프레시 중 오류 발생:', refreshError);
          }
        }
      }
    },
    clearFields() {
      this.title = "";
      this.content = "";
      this.receiverName = "";
    },
    closeModal() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.message-title,
.message-input,
.message-content,
.send-button {
  font-family: 'Cute Font', cursive; /* Cute Font 글꼴 적용 */
}

.message-window {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 9999;
  max-width: 400px;
  width: 90%;
}

.message-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.message-input,
.message-content {
  width: calc(100% - 40px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.send-button {
  width: 100%;
  padding: 12px;
  border-radius: 5px;
  font-size: 18px;
}

/* 로그인 알림 스타일 */
.login-alert {
  margin-top: 20px;
  text-align: center;
}

.login-alert p {
  margin-bottom: 10px;
}

.login-alert button {
  padding: 8px 16px;
  border-radius: 5px;
  font-size: 16px;
}

/* 모달 닫기 버튼 스타일 */
.close-button {
  position: absolute;
  top: 10px; /* 상단 여백 조정 */
  right: 10px; /* 우측 여백 조정 */
  cursor: pointer;
}
</style>
