import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChooseModeGameView from '../views/ChooseModeGameView.vue' 
import RoomView from '../views/RoomView.vue'
import GameView from '../views/GameView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
		{
			path: '/choose-mode-game',
      name: 'choose-mode-game',
      component: ChooseModeGameView
		},
		{
			path: '/room',
      name: 'room',
      component: RoomView 
		},
		{
			path: '/room/play',
      name: 'play',
      component: GameView
		}
  ]
})

export default router
