import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: "/",
    component: () => import("layouts/MainImagePage.vue"), // 메인 이미지 페이지로 수정
  },
  {
    path: "/main-layout",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/pids", component: () => import("pages/NewsPage.vue") },
      { path: "/pids/:pidId", component: () => import("pages/PidDetailPage.vue") },
      {path: "/community", component: () => import("pages/CommunityPage.vue"),},
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/signup", component: () => import("pages/SignupPage.vue") },
      { path: "/mypage", component: () => import("pages/MyPage.vue") },
      { path: "/isstracker", component: () => import("pages/ISSTrackerPage.vue") },
      { path: "/posts/create", component: () => import("pages/PostCreate.vue") },
      { path: "/posts/:postId", component: () => import("pages/PostDisplay.vue") },
      { path: "/edit_profile", component: () => import("pages/Edit_profile.vue") },
      { path: "/Myposts", component: () => import("pages/MyPosts.vue") },
      { path: "/MyLikes", component: () => import("pages/MyLikes.vue") },
      { path: "/apod", component: () => import("pages/apod.vue") },
      { path: "/marsRover", component: () => import("pages/mars.vue") },
      { path: "/withdrawalPage", component: () => import("pages/WithdrawalPage.vue") },
      { path: "/updatePasswordPage", component: () => import("pages/updatePasswordPage.vue") },
      { path: "/send-password-code", component: () => import("pages/SendPasswordCode.vue") },
      { path: "/contact", component: () => import("pages/contactPage.vue") },
      { path: "/Home", component: () => import("pages/homePage.vue") },
      { path: "/earth", component: () => import("pages/earthPage.vue") },
      { path: "/Mars", component: () => import("pages/MarsPage.vue") },
      { path: "/saturn", component: () => import("pages/SaturnPage.vue") },
      { path: "/venus", component: () => import("pages/VenusPage.vue") },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];
export default routes;
