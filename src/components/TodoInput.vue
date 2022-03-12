<template>
  <div class="inputBox shadow" @keydown.esc="showModal = false">
    <input
      type="text"
      ref="input"
      v-model="newTodoItem"
      @keydown.enter="addTodo"
    />
    <!-- <button @click="addTodo">add</button> -->
    <span
      class="addContainer"
      @click="addTodo"
      ref="span"
      tabindex="1"
      @keydown.esc="closeModal"
    >
      <i class="fa-solid fa-plus"></i>
    </span>
    <AlertModal :show="showModal" @close="closeModal">
      <template #header>
        <h3>
          경고!!
          <i
            class="closeModalBtn fa-solid fa-circle-xmark"
            @click="closeModal"
          ></i>
        </h3>
      </template>

      <template #body>
        <p>공백으로 추가할 수 없습니다!</p>
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
      if (this.newTodoItem.trim() !== '') {
        // this.$emit('addTodoItem', this.newTodoItem)
        this.$store.commit('addOneItem', this.newTodoItem)
        this.clearInput()
      } else {
        this.$refs.span.focus()
        this.showModal = true
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
    closeModal() {
      this.showModal = false
      this.$refs.input.focus()
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

.closeModalBtn {
  color: #42b983;
}
</style>
