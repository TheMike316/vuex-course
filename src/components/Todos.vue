<template>
    <div>
        <h3>Todos</h3>
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

</style>