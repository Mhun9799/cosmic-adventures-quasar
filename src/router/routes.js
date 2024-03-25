const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/news", component: () => import("pages/NewsPage.vue") },
      {
        path: "/community",
        component: () => import("pages/CommunityPage.vue"),
      },
      { path: "/login", component: () => import("pages/LoginPage.vue") },
      { path: "/signup", component: () => import("pages/SignupPage.vue") },
      { path: "/mypage", component: () => import("pages/MyPage.vue") },
      { path: "/isstracker", component: () => import("pages/ISSTrackerPage.vue") },
      { path: 'posts/create', component: () => import('pages/PostCreate.vue') },
      { path: 'posts/:postId', component: () => import('pages/PostDisplay.vue') },
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
