/**
 * Created by CatM on 2017/2/4.
 */
import Vue from 'vue';
import ToDo from './ToDo.vue';

new Vue({
    el: '#inputWrapper',
    render: h => h(ToDo)
})