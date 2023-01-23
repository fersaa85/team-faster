/*
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
*/


const routes = [
    {
        path: '/v2',
        component: () => import('../Pages/v2/Home.vue'),
        name: 'home'
    },
    {
        path: '/v2/coaches',
        component: () => import('../Pages/v2/Coaches.vue'),
        name: 'coaches'
    },
    {
        path: '/v2/galeria',
        component: () => import('../Pages/v2/Galeria.vue'),
        name: 'galeria'
    },
    {
        path: '/v2/blog',
        component: () => import('../Pages/v2/Blog.vue'),
        name: 'blog'
    },
    {
        path: '/v2/blog/:slug',
        name: 'post',
        component: () => import('../Pages/v2/Post.vue'),
        meta: { scrollToTop: true }
    },
    {
        path: '/v2/registro',
        component: () => import('../Pages/v2/Registro.vue'),
    }
];


export default routes;
