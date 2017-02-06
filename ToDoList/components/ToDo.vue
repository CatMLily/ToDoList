<template>
    <div id="inputWrapper">
        <input v-model="message" placeholder="Please enter your plan" class="list_input"/>
        <button @click="addToList" class="list_add">Add To Do</button>
        <addToDo v-bind:title="todos"></addToDo>
    </div>
</template>

<script>
    import addToDo from './addToDo.vue';
    export default {
        data(){
            return{
                todos:[],
                message:this.message
            }
        },
        methods:{
            addToList() {
                if(this.message==null){
                    alert("待办事项不能为空~");
                }else{
                    this.todos.push({content:this.message});
                    this.message='';
                }
            }
        },
        components:{
            addToDo
        }
    }
</script>

<style scoped>
    * {
        box-sizing: border-box;
    }
    html,body {
        padding: 0;
        margin: 0;
    }
    .list_input {
        left: 30%;
        display: block;
        position: absolute;
        width: 300px;
        border: 1px solid coral;
        border-radius: 4px;
        font-size: 20px;
        line-height: 30px;
        padding: 6px 16px;
        margin-top: 20px;
        outline: none;
    }
    .list_add {
        left: 65%;
        display: block;
        position: absolute;
        border: 1px solid coral;
        border-radius: 4px;
        font-size: 20px;
        line-height: 30px;
        padding: 6px 16px;
        background: coral;
        box-shadow: 0 1px 5px gray;
        color: white;
        text-shadow: 0 -1px 1px #335166;
        margin-top: 20px;
        outline: none;
    }
    .my_list>li {
        margin: 5px auto;
        font-size: 18px;
        line-height: 26px;
    }

</style>