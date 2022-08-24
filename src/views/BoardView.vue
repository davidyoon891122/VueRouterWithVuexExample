<template>
    <div class="board">
        <p>이곳은 {{boardName}} 게시판 입니다.</p>
    </div>
</template>

<script>
export default {
    name: "BoardView",
    date() {
        return {
            boardName: ""
        }
    },
    created() {
        this.boardName = this.$route.params.id;
    }
}
</script>