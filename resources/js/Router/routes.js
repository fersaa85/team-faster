const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/registro/:slug',
    component: () => import('../Pages/Registro.vue'),
  },
  {
    path: '/coaches',
    component: () => import('../Pages/Coaches.vue'),
    name: 'coaches'
  },
  {
    path: '/registro',
    component: () => import('../Pages/Venues.vue'),
    name: 'registro'
  },
  {
    path: '/galeria/:venueId',
    component: () => import('../Pages/Galeria.vue'),
    name: 'galeria'
  },
  {
     path: '/blog',
     name: 'blog',
     component: () => import('../Pages/Blog.vue'),
     meta: { scrollToTop: true }
  },
  {
     path: '/blog/:slug',
     name: 'post',
     component: () => import('../Pages/Post.vue'),
     meta: { scrollToTop: true }
  },
  {
     path: '/albums',
     name: 'albums',
     component: () => import('../Pages/Albums.vue'),
     meta: { scrollToTop: true }
  },
  { path: '*', redirect: '/' }
]

export default routes;
