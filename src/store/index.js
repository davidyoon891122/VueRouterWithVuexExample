import { COUNT_INCREMENT } from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      count: 0,
      todos: [
      {
        text: "Vue.js 프로젝트 100번 연습하기",
        done: false
      },
      {
        text: "Vue.js 강의 듣기",
        done: true
      },
    ]
    },
    mutations: {
      [COUNT_INCREMENT] (state) {
        state.count++
      }
    },
    getters: {
      doneTodos (state) {
        return state.todos.filter(todo => todo.done)
      },
      doneTodosCount (state) {
        return state.todos.filter(todo => todo.done).length
      }
    },
    actions: {
        // 여러개의 커밋을 묶음으로 처리할 수 있음
        test(context) {
            return context.commit(COUNT_INCREMENT)
        }
    }
  })