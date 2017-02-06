/**
 * Created by CatM on 2017/1/14.
 */
var data = {haveDone:'未完成'}
Vue.component('todo-item', {
    template:' <li>{{title}} <button v-on:click="removeList" v-bind:class="{isactive:isActive,nonactive:nonActive}">{{haveDone}}</button></li>',
    props:['title'],
    data:function () {
        return{
            haveDone:'未完成',
            isActive:false,
            nonActive:true
        }
    },
    methods:{
        removeList:function () {
            this.haveDone='完成',
                this.isActive=true,
                this.nonActive=false
        }
    }
})
var app1 = new Vue({
    el:'#inputWrapper',
    data:{
        todos:[],
        message:this.message,
        complete:'未完成'
    },
    methods:{
        addToList:function () {
            if(this.message==null){
                alert("待办事项不能为空~");
            }else{
                this.todos.push(this.message);
                this.message='';
            }

        }
    }
})