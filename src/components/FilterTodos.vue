<template>
    <div>
        <label>
            Filter Todos:
            <select @change="filterTodos($event)">
                <option value="24">24</option>
                <option value="18">18</option>
                <option value="12">12</option>
                <option value="9">9</option>
                <option value="6">6</option>
            </select>
        </label>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        name: "FilterTodos",
        methods: {
            ...mapActions(['filterTodos'])
        }
    }
</script>

<style scoped>
    select {
        margin-top: 20px;
        padding: 6px;
        border: 1px solid #41b883;
    }
</style>