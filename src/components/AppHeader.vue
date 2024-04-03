<template>
  <div>
    <q-header elevated class="main-header">
      <q-toolbar class="toolbar">
        <q-toolbar-title @click="goTo('/Home')" class="clickable-title">
          🅞🅑🅢🅔🅡🅥🅔🅡
        </q-toolbar-title>
        <div class="toolbar-items">
          <q-btn flat label="Home" @click="goTo('/Home')" class="toolbar-item"/>
          <q-btn flat label="Community" @click="goTo('/community')" class="toolbar-item"/>
          <q-btn flat label="편지보내기" @click="toggleMessageWindow" class="toolbar-item"/>
          <q-btn flat label="받은편지함" @click="toggleReceivedMessages" class="toolbar-item"/>
          <q-btn flat label="보낸편지함" @click="toggleSentMessages" class="toolbar-item"/> <!-- 보낸 편지함 버튼 추가 -->
          <q-btn flat label="Contact" @click="goTo('/contact')" class="toolbar-item"/>
          <toggle-menu :accessToken="accessToken" class="toggle-menu"/>
        </div>
        <q-btn flat icon="menu" @click="toggleSidebar" class="toggle-button"/>
      </q-toolbar>
    </q-header>
    <!-- 새로운 쪽지 보내기 컴포넌트 -->
    <message-window v-if="messageWindowOpen" @close="closeMessageWindow"/>
    <!-- 받은 쪽지함 컴포넌트 -->
    <received-messages v-if="receivedMessagesOpen" />
    <!-- 보낸 쪽지함 컴포넌트 -->
    <sent-messages v-if="sentMessagesOpen" /> <!-- 보낸 편지함 컴포넌트 추가 -->
  </div>
</template>

<script>
import { Cookies } from "quasar";
import ToggleMenu from "components/ToggleMenu.vue";
import MessageWindow from "components/Message-window.vue"; // 새로운 쪽지 보내기 컴포넌트 import
import ReceivedMessages from "components/Received-messages.vue"; // 받은 쪽지함 컴포넌트 import
import SentMessages from "components/Sent-messages.vue"; // 보낸 편지함 컴포넌트 import

export default {
  components: { ToggleMenu, MessageWindow, ReceivedMessages, SentMessages },
  data() {
    return {
      accessToken: null,
      messageWindowOpen: false,
      receivedMessagesOpen: false,
      sentMessagesOpen: false // 보낸 편지함 상태 변수 추가
    };
  },
  mounted() {
    this.checkAccessToken();
  },
  methods: {
    goTo(path) {
      this.$router.push({path: path});
    },
    checkAccessToken() {
      const storedToken = Cookies.get("Authorization");
      if (storedToken) {
        this.accessToken = storedToken;
      } else {
        this.goTo("/login");
      }
    },
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    },
    toggleMessageWindow() {
      if (!this.accessToken) {
        alert("로그인이 필요합니다. 로그인 해주세요.");
        return;
      }
      this.messageWindowOpen = !this.messageWindowOpen; // 쪽지 보내는 창의 상태를 토글합니다.
    },
    closeMessageWindow() {
      this.messageWindowOpen = false; // 쪽지 보내는 창을 닫습니다.
    },
    toggleReceivedMessages() {
      if (!this.accessToken) {
        alert("로그인이 필요합니다. 로그인 해주세요.");
        return;
      }
      this.receivedMessagesOpen = !this.receivedMessagesOpen; // 받은 쪽지함의 상태를 토글합니다.
    },
    toggleSentMessages() {
      if (!this.accessToken) {
        alert("로그인이 필요합니다. 로그인 해주세요.");
        return;
      }
      this.sentMessagesOpen = !this.sentMessagesOpen; // 보낸 편지함의 상태를 토글합니다.
    }
  }
};
</script>

<style scoped>
.main-header {
  background-color: #222;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toolbar-items {
  display: flex;
}

.toolbar-item {
  margin-right: 1rem;
}

.toggle-menu {
  margin-right: 1rem;
}

.toggle-button {
  position: fixed;
  top: 5px;
  left: 250px;
  cursor: pointer;
  background-color: #222;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
}

.clickable-title:hover {
  cursor: pointer;
}
</style>
