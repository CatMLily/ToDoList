<template>
    <ol class="my_list">
        <li v-for="(todo,index) in title">
            <p>
                <span :contenteditable="editStatus" @blur="updateList(todo,$event.target)">{{todo.content}}</span>
                <button @click="removeList()" :class="{isactive:isActive,nonactive:nonActive}">{{haveDone}}</button>
                <button @click="changeEditStatus" class="isactive">修改</button>
                <button @click="deleteList(index)" class="isactive">删除</button>
            </p>
        </li>
    </ol>
</template>

<script>
    export default {
        name: 'addToDo',
        props : ['title'],
        data(){
            return {
                haveDone:'未完成',
                isActive:false,
                nonActive:true,
                editStatus:false
            }
        },
        methods:{
            removeList(){
                this.haveDone = '完成';
                this.isActive = true;
                this.nonActive = false;
            },
            changeEditStatus(){
                this.editStatus = true;
            },
            updateList(listValue,target){
                console.log(listValue.content);
                console.log(target.innerHTML);
                listValue.content = target.innerHTML;
                this.editStatus = false;
            },
            deleteList(index){
                this.title.splice(index,1);
            }
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
    .my_list {
        position: absolute;
        margin-top: 100px;
        margin-left: 10%;
        padding: 20px;
    }
    .my_list>li {
        margin: 5px auto;
        font-size: 18px;
        line-height: 26px;
    }
    .nonactive {
        border: 1px solid coral;
        border-radius: 4px;
        font-size: 14px;
        line-height: 26px;
        padding: 2px 6px;
        background: coral;
        box-shadow: 0 1px 5px white;
        color: white;
        outline: none;
    }
    .isactive {
        border: 1px solid mediumseagreen;
        border-radius: 4px;
        font-size: 14px;
        line-height: 26px;
        padding: 2px 6px;
        background: mediumseagreen;
        box-shadow: 0 1px 5px white;
        color: white;
        outline: none;
    }
</style>