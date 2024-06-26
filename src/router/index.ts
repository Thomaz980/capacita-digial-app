import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/Home.vue';
import Start from '../views/Start.vue';
import Loading from '../views/Loading.vue';
import EscritaPort from '../views/Atividades/Portugues/Escrita.vue';
import AttTec from '../views/Atividades/Tecnologia/Att.vue';
import Null from '../views/Atividades/Null.vue';
import Memoria from '../views/Atividades/Raciocinio/Memoria.vue';
import Modulo from '../views/Atividades/Modulo.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/loading',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/att/port/escrita',
    name: 'Escrita Portugues',
    component: EscritaPort
  },
  {
    path: '/att/tec',
    name: 'atividade de tecnologia',
    component: AttTec
  },
  {
    path: '/att/mat',
    name: 'atividade de matematica',
    component: Null
  },
  {
    path: '/att/rl',
    name: 'atividade de raciocinio logico',
    component: Null
  },
  {
    path: '/att/rl/memoria',
    name: 'atividade memória',
    component: Memoria
  },
  {
    path: '/att/modulo',
    name: 'Modulo de atividade',
    component: Modulo
  }
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
