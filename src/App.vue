<template>
  <div id="app">
    <TodoHeader />
    <TodoInput @addTodoItem="addOneItem" />
    <TodoList :propsdata="todoItems" />
    <TodoFooter />
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  data() {
    return {
      todoItems: [],
    }
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        console.log(localStorage.key(i))
        let todoItem = JSON.parse(localStorage.getItem(localStorage.key(i)))
        this.todoItems.push(todoItem)
      }
    }
  },
  methods: {
    addOneItem(newTodoItem) {
      var obj = {
        completed: false,
        item: newTodoItem,
      }
      localStorage.setItem(newTodoItem, JSON.stringify(obj))
      this.todoItems.push(obj)
    },
  },
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
}
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 600px;
}

button {
  border-style: groove;
}

.shadow {
  box-shadow: 5px 10px 10px rbga(0, 0, 0, 0.03);
}
</style>
