<template>
    <div>
        <h3>Todos</h3>
        <div class="legend">
            <span>Double click to mark as complete</span>
            <span>
                <span class="incomplete-box"/> = Incomplete
            </span>
            <span>
                <span class="complete-box"/> = Complete
            </span>
        </div>
        <div class="todos">
            <div class="todo" v-for="todo in allTodos" :key="todo.id">
                {{todo.title}}
                <button class="remove" @click="deleteTodo(todo.id)">x</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        name: "Todos",
        methods: {
            ...mapActions(['fetchTodos', 'deleteTodo'])
        },
        computed: mapGetters(['allTodos']),
        created() {
            this.fetchTodos();
        }
    }
</script>

<style scoped>
    .todos {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1rem;
    }

    .todo {
        border: 1px solid #ccc;
        background: #41b883;
        padding: 1rem;
        border-radius: 5px;
        text-align: center;
        position: relative;
        cursor: pointer;
    }

    .remove {
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #41b883;
        position: absolute;
        bottom: 10px;
        right: 10px;
        color: #fff;
        cursor: pointer;
    }

    .remove:hover {
        background: #fff;
        color: #41b883;
    }

    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .complete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #35495e;
    }

    .incomplete-box {
        display: inline-block;
        width: 10px;
        height: 10px;
        background: #41b883;
    }

    .is-complete {
        background: #35495e;
        color: #fff;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }

</style>