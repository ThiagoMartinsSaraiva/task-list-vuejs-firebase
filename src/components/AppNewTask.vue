<template>
  <div class="input-container">
    <input v-model="currentItem" type="text" placeholder="Task" @keydown.enter="insertNewItem">
    <button @click="insertNewItem">+</button>
  </div>
</template>

<script>
export default {
  name: 'AppNewTask',
  data() {
    return {
      currentItem: '',
    }
  },
  methods: {
    insertNewItem() {
      if (this.currentItem) {
        console.log(this.currentItem)
      }
    }
  }
}
</script>

<style scoped>
  .input-container {
    height: 3rem;
    display: flex;
  }

  .input-container input {
    text-indent: 1rem;
    flex: 1;
    font-size: 1.2rem;
    height: 3rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }

  .input-container button {
    width: 3rem;
    height: 3rem;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    cursor: pointer;
    background-color: #444;
    color: #fff;
    font-size: 1.5rem;
  }
</style>