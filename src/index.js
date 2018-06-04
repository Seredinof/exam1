import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './components/App.vue';
import Articles from './components/Articles.vue'
import ArticleDetail from './components/ArticleDetail.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
      { path: '/', component: Articles},
      { path: '/:id', component: ArticleDetail}
    ]
})

const app = new Vue({
    store,
    router,
    render(h) {
        return h(App);
    },
});

app.$mount(document.querySelector('#app'));
