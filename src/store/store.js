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
  mutations: {
    addOneItem(state, todoItem) {
      console.log(todoItem)
      const obj = {
        completed: false,
        item: todoItem,
      }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      state.todoItems.push(obj)
    },
    removeOneItem(state, payload) {
      console.log(payload.todoItem, payload.index)
      state.todoItems.splice(payload.index, 1)
      localStorage.removeItem(payload.todoItem.item)
    },
    toggleOneItem(state, { todoItem, index }) {
      state.todoItems[index].completed = !todoItem.completed
      localStorage.removeItem(todoItem.item)
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem))
    },
    clearAllItems(state) {
      localStorage.clear()
      state.todoItems = []
    },
  },
})
