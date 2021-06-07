import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import naver from 'vue-naver-maps';
// const { createProxyMiddleware } = require("http-proxy-middleware");

Vue.config.productionTip = false

// Setting up default vue's http modules for api calls
Vue.prototype.$http = axios

// Naver maps
Vue.use(naver, {
  clientID: 'li0futngb6',
  useGovAPI: false, //공공 클라우드 API 사용 (선택)
  subModules:'geocoder' // 서브모듈 (선택)
});

// Vue.use(
//   createProxyMiddleware("/api", {
//     target: "https://naveropenapi.apigw.ntruss.com",
//     changeOrigin: true,
//     pathRewrite: { "^/api/": "/" },
//   })
// );

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

