<template>
    <div>
        <div class="count">{{countPlusLocalState}}</div>
        <button @click="increase">증가</button>
        <div style="margin-top: 30px;">
            <input type="number" v-model="localCount"/>
        </div>
        <div>완료한 목록의 갯수: {{doneTodos.length}}개</div>
        <div class="todos">
            {{doneTodosCount}}
        </div>
    </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex'
// import { COUNT_INCREMENT } from '../store/mutation-types'

export default {
    computed: {
        ...mapState('count', {
    // 화살표 함수는 코드를 매우 간결하게 만들어 줍니다!
    count: state => state.count,

    // 문자열 값 'count'를 전달하는 것은 `state => state.count`와 같습니다.
    countAlias: 'count',

    // `this`를 사용하여 로컬 상태에 액세스하려면 일반적인 함수를 사용해야합니다
    countPlusLocalState (state) {
        return state.count + parseInt(this.localCount)
    }

    }),
        ...mapGetters("todos",[
            "doneTodosCount",
            "doneTodos"
        ])
    },
    data() {
        return {
        localCount: 20,
        state: null
        }
    },
    // LifeCycle
    beforeCreate() {

    },
    created() {
        this.state = this.$store.state
    },
    beforeMount() {

    },
    mounted() {

    },
    
    methods: {
        increase() {
            this.$store.dispatch("count/test")
            
        }
    }
}
</script>
<style >
    
</style>