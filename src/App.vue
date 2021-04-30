<template>
  <div class="app">
    <main>
      <app-new-task @new-item="insertNew" />
      <app-task-list :list="list" @remove-item="remove" @mark-item-as-done="markAsDone" />
    </main>
  </div>
</template>

<script>
import AppTaskList from './components/AppTaskList'
import AppNewTask from './components/AppNewTask'

export default {
  name: 'App',
  components: {
    AppTaskList,
    AppNewTask
  },
  data() {
    return {
      currentItem: '',
      list: [],
    }
  },
  methods: {
    async fetchItems() {
      const { data } = await this.$http.get('tasks.json')
      this.list = data
    },
    markAsDone(itemIndex) {
      if (this.list[itemIndex]) {
        this.list[itemIndex].done = !this.list[itemIndex].done
      }
    },
    remove (itemIndex) {
      if (this.list[itemIndex]) {
        this.list.splice(itemIndex, 1)
      }
    },
    insertNew(task) {
      this.list.unshift(task)
    }
  },
  created() {
    this.fetchItems()
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: none;
    font-family: 'Inter', sans-serif;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    background-color: #333;
    color: #fff;
  }

  .app {
    height: 96vh;
    width: 95vw;
    margin: 2vh auto;
    padding: 1.3rem;
    background: #0004;
    border-radius: .75rem;
    box-shadow: 0 0 1rem .075rem #0006;
  }

  main {
    background: #666;
    border-radius: .75rem;
    padding: 2rem 1rem;
    height: 100%;
    box-shadow: 0 0 1rem .075rem #0006;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

</style>
