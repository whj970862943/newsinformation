import Vue from 'vue'
import App from './App.vue'

import router from './router/router.js'
import store from './store/index.js'

import moment from 'moment'
import animate from 'animate.css'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import {Button} from 'mint-ui'

import VueLazyload from 'vue-lazyload'
import './assets/css/public/reset.css'
import './assets/js/flexible.js'
//import '../build/build.js'

// 图片懒加载
Vue.use(VueLazyload, {    
  error: '/src/assets/imgs/imgerror.jpg',
  loading: '/src/assets/imgs/imgloading.gif',
  preLoad: 1,
  attempt: 1
});
Vue.component(Button.name, Button)
Vue.use(iView);
Vue.use(ElementUI);
Vue.use(moment);


new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
