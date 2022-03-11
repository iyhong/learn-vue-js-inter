import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i))
        let todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
        arr.push(todoItem)
      }
    }
    return arr
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
})
