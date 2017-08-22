import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from '../components/ArticleList.vue'
import ArticleForm from '../components/ArticleForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/new',
      name: 'ArticleForm',
      component: ArticleForm
    }
  ]
})