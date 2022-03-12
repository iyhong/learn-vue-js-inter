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

export default {
  state: {
    todoItems: storage.fetch(),
    testText: '',
  },
  getters: {
    sotredTodoItem(state) {
      return state.todoItems
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      console.log(todoItem)
      const obj = {
        completed: false,
        item: todoItem,
      }
      localStorage.setItem(todoItem, JSON.stringify(obj))
      console.log(state)
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
    changeText(state, newText) {
      state.testText = newText
    },
  },
  actions: {
    testActions(context, newText) {
      console.log(context)
      context.commit('changeText', newText)
    },
  },
}
