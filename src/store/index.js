import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
import todo from './modules/todo'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    demo,
    todo,
  },
})
