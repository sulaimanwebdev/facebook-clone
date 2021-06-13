
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/PageHome.vue'), name: 'Home' },
      { path: '/watch', component: () => import('src/pages/PageWatch.vue'), name: 'Watch' },
      { path: '/watch/shows', component: () => import('src/pages/PageShows.vue'), name: 'Shows' },
      { path: '/groups', component: () => import('src/pages/PageGroups.vue'), name: 'Groups' },
      { path: '/gaming', component: () => import('src/pages/PageGaming.vue'), name: 'Gaming'},
      { path: '/gaming/browse', component: () => import('src/pages/PageBrowse.vue'), name: 'Browse'},
      { path: '/gaming/browse/live', component: () => import('src/pages/PageLive.vue'), name: 'Live'},
      { path: '/sulaiman.dev', component: () => import('src/pages/sulaiman.vue'), name: 'sulaiman'},
      { path: '/elonmusk', component: () => import('src/pages/elonmusk.vue'), name: 'elonmusk'},
      { path: '/warrenbuffet', component: () => import('src/pages/warrenbuffet.vue'), name: 'warrenbuffet'},
      { path: '/jeffbezos', component: () => import('src/pages/jeffbezos.vue'), name: 'jeffbezos'},
      { path: '/billgates', component: () => import('src/pages/billgates.vue'), name: 'billgates'},
      { path: '/larrypage', component: () => import('src/pages/larrypage.vue'), name: 'larrypage'},
      { path: '/mark', component: () => import('src/pages/mark.vue'), name: 'mark'},














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
