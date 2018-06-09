import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';
import App from './components/App.vue'
import Layout from './components/Layout.vue';
import Articles from './components/Articles.vue'
import ArticleDetail from './components/ArticleDetail.vue'
import NotFound from './components/NotFound.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { path: '/', component: Layout,
            children: [
                { path: '/', component: Articles },
                { path: '/article/:id', component: ArticleDetail },
            ]
        },
        { path: '/404', component: NotFound },
        { path: '*', component: NotFound },
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
