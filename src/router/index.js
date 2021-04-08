import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/questions',
    name: 'Questions',
    // route level code-splitting
    // this generates a separate chunk (questions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "questions" */ '../views/Questions.vue'),
  },
  {
    path: '/questions/:id',
    name: 'SingleQuestion',
    // route level code-splitting
    // this generates a separate chunk (questions.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "question" */ '../views/Question.vue'),
  },
  {
    path: '/summary',
    name: 'Summary',
    component: () => import(/* webpackChunkName: "summary" */ '../views/Summary.vue'),
  },
];

const router = new VueRouter({
  routes,
  mode: `history`
});

export default router;
