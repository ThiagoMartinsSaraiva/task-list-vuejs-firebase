<template>
  <div class="list-container">
    <ul>
      <li v-for="item in list" :key="item.title">
        <div class="item" @click="markItemAsDone(item)">
          <div :class="['item-title', { done: item.done }]">
            {{ item.title }} 
          </div>
          <div class="remove-item" @click="removeItem(item)">
            <button>X</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { api } from '../services/api'

export default {
  name: 'AppTaskList',
  props: {
    list: {
      type: Array,
      required: true,
    }
  },
  methods: {
    markItemAsDone(item) {
      api.patch(`tasks/${item.id}.json`, {
        done: !item.done
      })
        .then(() => {
          const itemIndex = this.list.indexOf(item)
          this.$emit('mark-item-as-done', itemIndex)
        })
    },
    removeItem(item) {
      api.delete(`tasks/${item.id}.json`)
      .then(() => {
        const itemIndex = this.list.indexOf(item)
        this.$emit('remove-item', itemIndex)
      })
    }
  }
}
</script>

<style scoped>
  .list-container {
    flex: 1;
    background: #444;
    border-radius: .75rem;
    padding: 1.6rem 1rem;
    border: .112rem solid #333;
    overflow-y: auto;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 1.6rem
  }

  li {
    padding: 1rem;
    border: .8px solid #3336;
    border-radius: .75rem;
    background: #333;
  }

  li div.item {
    display: flex;
    justify-items: flex-end;
    justify-content: flex-end;
    gap: 1rem;
  }

  li div.item-title {
    align-self: center;
    flex: 1;
    position: relative;
    text-decoration: line-through;
    text-decoration-color: transparent;
    text-decoration-thickness: .2em;
    transition-property: text-decoration;
    transition-duration: .2s;
  }


  li div.item-title.done {
    text-decoration: line-through;
    text-decoration-color: #b02;
    text-decoration-thickness: .2em;
  }

  li div.item .remove-item {
    align-self: center;
    height: 2rem;
    width: 2rem;
  }

  li div.item .remove-item button {
    background-color: #b02;
    color: #fff;
    height: 100%;
    width: 100%;
    border-radius: .3rem;
    cursor: pointer;
    transition: background-color .2s;
  }

  li div.item .remove-item button:hover {
    background-color: #c13;
  }
</style>