<template>
  <div class="app">
    <main>
      <app-new-task />
      <app-task-list :list="list" />
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
      list: [
        { title: 'Study HTML', done: false },
        { title: 'Study CSS', done: false },
        { title: 'Study JS', done: false },
        { title: 'Study VueJS', done: false },
        { title: 'Create TaskList Project', done: false },
        { title: 'Create Project Using 3rd Party API', done: false },
        { title: 'Create Pokemon Project Using 3rd Party API', done: false },
        { title: 'Create Star Wars Project Using 3rd Party API', done: false },
        { title: 'Create Naruto Project Using 3rd Party API', done: false },
      ]
    }
  },
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
