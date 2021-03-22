import Vue from 'vue';
import VueRouter from 'vue-router';
import BookList from '../views/BookList';
import BookInfo from '../views/BookInfo';

Vue.use(VueRouter);

const routes = [
  {
    path: '/', //path: '/' är lika med ens startsida alltså localhost:8080 eller www.awesomewebsite.com
    component: BookList
  },
  {
    path: '/book',
    component: BookInfo
  }
]

const router = new VueRouter({
  routes
});

export default router;