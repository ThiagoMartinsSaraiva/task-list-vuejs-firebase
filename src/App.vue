<template>
  <div class="app">
    <main>
      <div class="input-container">
        <input type="text" placeholder="Task">
        <button>+</button>
      </div>
      <div class="list-container">
        <ul>
          <li v-for="item in list" :key="item.title">
            <div>
              {{ item.title }} 
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      list: [
        { title: 'Study HTML', done: false },
        { title: 'Study CSS', done: false },
        { title: 'Study JS', done: false },
        { title: 'Study VueJS', done: false },
        { title: 'Create TaskList Project', done: false },
        { title: 'Create Project Using 3rd Party API', done: false },
      ]
    }
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
    gap: 1rem;
  }

  .input-container {
    height: 3rem;
    display: flex;
  }

  .input-container input {
    text-indent: 1rem;
    flex: 1;
    font-size: 1.2rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
  }

  .input-container button {
    width: 3rem;
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    cursor: pointer;
  }

  .list-container {
    flex: 1;
    background: #444;
    border-radius: .75rem;
    padding: 2rem 1rem;
  }

  ul {
    list-style: none;
  }
</style>
