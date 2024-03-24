const routes = [
  // Under other all the pages are displayed that aren't really of use in the application itself
  {
    path: '/other',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: 'about', component: () => import('pages/AboutPage.vue')},
      {path: 'home', component: () => import('pages/HomePage.vue')}
    ],
    meta: {auth: false}
  },

  // All the pages and layouts that make the app work.
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
    ],
    meta: {auth: false}
  },
  {
    path: '/user',
    component: () => import('layouts/UserLayout.vue'),
    children: [
      {path: '', component: () => import('pages/UserDashboardPage.vue')},
      {path: 'e/:recipeId', component: () => import('pages/RecipeEditPage.vue')}, // e of edit
    ],
    meta: {auth: true}
  },

  // Always leave this as last one,
  // but you can also remove it
  {

    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
