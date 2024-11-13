import { createRouter, createWebHistory } from 'vue-router'
import GaleriWisataView from '@/views/GaleriWisataView.vue'
import PesanPaketView from '@/views/PesanPaketView.vue'
import PaketWisataView from '@/views/PaketWisataView.vue'
import TestimoniView from '@/views/TestimoniView.vue'
import DetailGaleriView from '@/views/DetailGaleriView.vue'
import LoginView from '@/views/LoginView.vue'
import HomeView from '@/views/HomeView.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/galeri',
      name: 'galeri',
      component: GaleriWisataView
    },
    {
      path: '/paketwisata',
      name: 'paketwisata',
      component: PaketWisataView
    }, {
      path: '/pesan/:id',
      name: 'pesan',
      component: PesanPaketView,
      props: true
    },
    {
      path: '/testimoni',
      name: 'testimoni',
      component: TestimoniView
    },
    {
      path: '/',
      name: 'profil',
      component: HomeView
    },
    {
      path: '/detailgaleri/:id',
      name: 'detailgaleri',
      component: DetailGaleriView,
      props:true
    },
    {
      path: '/hubungikami',
      name: 'hubungikami',
      component: LoginView,
      props:true
    }
    
   
  ]
})

export default router

