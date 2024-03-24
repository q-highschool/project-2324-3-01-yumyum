const routes = [
  // {
  //   path: '/about',
  //   component: () => import('layouts/EmptyLayout.vue'),
  //   children: [
  //     {path: '', component: () => import('pages/AboutPage.vue')},
  //   ],
  //   meta: {auth: false}
  // },
  {
    path: '/auth',
    component: () => import('layouts/AuthLayout.vue'),
    children: [
      {path: 'sign_in', component: () => import('pages/SignInPage.vue')},
      {path: 'sign_up', component: () => import('pages/SignUpPage.vue')},
    ],
    meta: {auth: false}
  },
  {
    path: '',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      {path: '', component: () => import('pages/DiscoverPage.vue')},
      {path: 'recipe/r/:recipeId', component: () => import('pages/RecipeReadPage.vue')}, // r of read
      // {path: 'home', component: () => import('pages/HomePage.vue')}
    ],
    meta: {auth: false}
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {path: '', component: () => import('pages/UserDashboardPage.vue'), meta: {auth: true}}, // e of edit
      {path: 'e/:recipeId', component: () => import('pages/RecipeEditPage.vue'), meta: {auth: true}}, // e of edit
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {

    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
