
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue'), name: 'Home' },
      { path: '/watch', component: () => import('src/pages/PageWatch.vue'), name: 'Watch' },
      { path: '/watch/shows', component: () => import('src/pages/PageShows.vue'), name: 'Shows' },
      { path: '/groups', component: () => import('src/pages/PageGroups.vue'), name: 'Groups' },



    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
