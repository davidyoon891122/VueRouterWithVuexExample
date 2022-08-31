export default {
    namespaced: true,
      state: () => {
        return {
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
}