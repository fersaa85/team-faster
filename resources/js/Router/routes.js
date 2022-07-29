const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/registro/:venueId',
    component: () => import('../Pages/Registro.vue'),
    name: 'registro'
  },
  {
    path: '/coaches',
    component: () => import('../Pages/Coaches.vue'),
    name: 'coaches'
  },
  {
    path: '/venues',
    component: () => import('../Pages/Venues.vue'),
    name: 'venues'
  },
  {
    path: '/galeria',
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
]

export default routes;
