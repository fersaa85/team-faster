const routes = [
  {
    path: '',
    component: () => import('../Pages/Home.vue'),
    name: 'home'
  },
  {
    path: '/registro',
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
  }
]

export default routes;
