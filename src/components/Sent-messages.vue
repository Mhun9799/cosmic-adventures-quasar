<template>
  <div class="inbox">
    <h2 class="inbox-title">📬 보낸 편지함</h2>
    <div v-if="messages.length === 0" class="no-messages">편지가 없습니다.</div>
    <div v-else class="message-list">
      <div v-for="(message, index) in displayedMessages" :key="index" class="message-item">
        <div class="message-info">
          <div class="profile-pic">
            <img :src="message.profilePicUrl" alt="프로필 사진" class="profile-pic-img" @click="showModal(message.profilePicUrl)">
          </div>
          <div class="message-details">
            <div class="message-receiver">받는 사람: {{ message.receiver }}</div>
            <div class="message-title">제목: {{ message.title }}</div>
            <div class="message-content">내용: {{ message.content }}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 모달 창 -->
    <div class="modal" v-if="showModalFlag" @click="closeModal">
      <span class="close" @click="closeModal">&times;</span>
      <img :src="modalImageUrl" alt="확대된 이미지" class="modal-content">
    </div>

    <!-- 페이징 -->
    <div class="pagination">
      <button @click="prevPage" :disabled="currentPage === 1">👈</button>
      <span>{{ currentPage }}</span>
      <button @click="nextPage" :disabled="currentPage * pageSize >= messages.length">👉</button>
    </div>

    <div v-if="!hasAccessToken" class="login-alert">
      <p>로그인이 필요합니다. 로그인 해주세요.</p>
      <button @click="redirectToLogin">로그인</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {Cookies} from 'quasar';
import {refreshAccessToken} from 'src/Module/authModule'; // refreshAccessToken 함수를 가져옵니다.

export default {
  data() {
    return {
      messages: [], // 받은 편지 목록을 저장할 배열
      displayedMessages: [], // 현재 페이지에 표시할 메시지 목록
      showModalFlag: false, // 모달 창 표시 여부를 저장하는 변수
      modalImageUrl: '', // 모달에 표시할 이미지 URL을 저장하는 변수
      currentPage: 1, // 현재 페이지 번호를 저장하는 변수
      pageSize: 3, // 한 페이지에 표시할 메시지의 수
      hasAccessToken: true
    };
  },
  mounted() {
    // 컴포넌트가 마운트되면 받은 편지함을 불러옵니다.
    this.fetchMessages();
  },
  methods: {
    async fetchMessages() {
      // 쿠키에서 엑세스 토큰을 가져옵니다.
      let storedToken = Cookies.get("Authorization");
      if (!storedToken) {
        this.hasAccessToken = false; // 엑세스 토큰이 없음을 표시
        console.error("엑세스 토큰이 없습니다.");
        return;
      }

      try {
        // 서버에 GET 요청을 보내 받은 편지함을 가져옵니다.
        const response = await axios.get('http://localhost:8080/api/v1/messages/send', {
          headers: {
            'Authorization': `Bearer ${storedToken}` // 헤더에 엑세스 토큰을 포함시킵니다.
          }
        });

        // 응답 데이터를 받아오고 프론트엔드에 맞게 가공합니다.
        this.messages = response.data.map(message => {
          // profilePicUrl에서 대괄호를 제거하여 URL만 추출합니다.
          const cleanedUrl = message.profilePicUrl.slice(1, -1);
          return {
            receiver: message.receiverName, // 받은 쪽지의 보낸 사람 이름을 사용합니다.
            title: message.title,
            content: message.content,
            profilePicUrl: cleanedUrl // 정제된 URL을 사용합니다.
          };
        });

        // 최신 메시지가 앞에 오도록 메시지를 역순으로 정렬합니다.
        this.messages.reverse();

        // 페이지가 변경될 때마다 메시지 목록을 업데이트합니다.
        this.updateDisplayedMessages();
      } catch (error) {
        console.error('편지함을 불러오는 중 오류 발생:', error);
        if (error.response && error.response.status === 401) {
          // 만료된 액세스 토큰이라면 리프레시 토큰을 사용하여 새로운 액세스 토큰을 요청합니다.
          try {
            storedToken = await refreshAccessToken();
            // 다시 시도합니다.
            await this.fetchMessages();
          } catch (refreshError) {
            console.error('액세스 토큰 리프레시 중 오류 발생:', refreshError);
          }
        }
      }
    },
    updateDisplayedMessages() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      this.displayedMessages = this.messages.slice(startIndex, startIndex + this.pageSize);
    },
    showModal(imageUrl) {
      this.modalImageUrl = imageUrl; // 클릭한 이미지의 URL을 모달에 표시할 이미지 URL로 설정합니다.
      this.showModalFlag = true; // 모달을 표시합니다.
    },
    closeModal() {
      this.showModalFlag = false; // 모달을 닫습니다.
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.updateDisplayedMessages();
      }
    },
    nextPage() {
      if (this.currentPage * this.pageSize < this.messages.length) {
        this.currentPage += 1;
        this.updateDisplayedMessages();
      }
    },
    redirectToLogin() {
      this.$router.push("/login");
    }
  }
};
</script>

<style scoped>

.message-receiver, .message-title, .message-content {
  font-family: 'Cute Font', cursive; /* Cute Font 글꼴 적용 */
  font-size: 20px; /* 글꼴 크기 조정 */
  color: #333; /* 글꼴 색상 변경 */
}

.message-title {
  font-weight: bold; /* 제목에 굵은 글꼴 적용 */
}

.inbox {
  position: fixed;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 90%;
  z-index: 9999;
}

.inbox-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.no-messages {
  text-align: center;
  font-size: 18px;
  color: #888;
}

.message-list {
  margin-top: 20px;
}

.message-item {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.message-info {
  display: flex;
  align-items: center;
}

.profile-pic {
  margin-right: 15px; /* 프로필 사진과 메시지 세부 정보 사이의 간격 조정 */
}

.profile-pic-img {
  width: 50px; /* 프로필 사진 크기 조정 */
  height: 50px;
  border-radius: 50%;
  cursor: pointer; /* 클릭 가능한 요소로 설정합니다. */
}

.message-details {
  flex-grow: 1; /* 메시지 세부 정보가 남은 공간을 모두 차지하도록 설정 */
}

.message-receiver {
  font-weight: bold;
}

.message-title {
  margin-top: 5px;
}

.message-content {
  margin-top: 5px;
  color: #555;
}

/* 모달 스타일 */
.modal {
  display: block;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 800px;
  max-height: 80%;
}

.close {
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
}

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}

/* 페이징 스타일 */
.pagination {
  margin-top: 20px;
  text-align: center;
}

.pagination button {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  color: #333;
  padding: 8px 16px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #ddd;
}

.pagination button:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

</style>
