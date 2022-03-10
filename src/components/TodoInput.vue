<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" @keydown.enter="addTodo" />
    <!-- <button @click="addTodo">add</button> -->
    <span class="addContainer" @click="addTodo">
      <i class="fa-solid fa-plus"></i>
    </span>
    <AlertModal :show="showModal" @close="showModal = false">
      <template #header>
        <h3>custom header</h3>
      </template>
    </AlertModal>
  </div>
</template>

<script>
import AlertModal from '../common/AlertModal.vue'
export default {
  components: {
    AlertModal,
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem)
        this.clearInput()
      } else {
        console.log('tt')
        this.showModal = true
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}

.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;
}
</style>
