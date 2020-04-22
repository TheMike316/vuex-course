import Vuex from 'vuex';
import Vue from 'vue';
import Todos from "../components/Todos";

//Load Vuex
Vue.use(Vuex);

//Create Store
export default new Vuex.Store({
    modules: {
        Todos
    }
});