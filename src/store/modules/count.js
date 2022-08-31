import { COUNT_INCREMENT } from '../mutation-types'

export default {
    namespaced: true,
    state: () => { // state는 함수형으로 
      return {
        count: 0, // $store.state.count.count
      }
    },
    mutations: {
      [COUNT_INCREMENT] (state) {
        state.count++
      }
    },
    actions: {
        // 여러개의 커밋을 묶음으로 처리할 수 있음
        test(context) {
            return context.commit(COUNT_INCREMENT)
        }
    }
  }