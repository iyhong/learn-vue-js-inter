<template>
  <div id="app">
    <TodoHeader />
    <TodoInput />
    <TodoList />
    <TodoFooter />
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'

export default {
  components: { TodoHeader, TodoInput, TodoList, TodoFooter },
  created() {
    this.$store.dispatch('testActions', 'app.vue')
  },
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
