import Vue from 'vue'
import Vuex from 'vuex'
import todos from './modules/todos'
import count from './modules/count'

Vue.use(Vuex)
// $store.state.count
export default new Vuex.Store({
  modules: {
    // $store.state.count.count
    count: count,
    // $store.state.todos.todos
    todos: todos
  }
})