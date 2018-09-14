// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Form, Select, Option, Table, TableColumn } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(Select)
Vue.use(Option)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
