<template>
  <div>
    <input type="text" v-model="newTodoItem" @keydown.enter="addTodo" />
    <button @click="addTodo">add</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    addTodo() {
      console.log(this.newTodoItem)
      // 저장로직 수행
      localStorage.setItem(this.newTodoItem, this.newTodoItem)
      this.newTodoItem = ''
    },
  },
}
</script>

<style></style>
