<template>
  <li>
    <p>
      <span :contenteditable = "editStatus" @blur = "updateList(title, $event.target)" :id="test(titleIndex)">{{ title.content }}</span>
      <button @click = "removeList" :class = "{ isactive: isActive, nonactive: nonActive }">{{ haveDone }}</button>
      <button @click = "changeEditStatus(titleIndex)" class = "isactive">修改</button>
      <button @click = "deleteList(titleIndex)" class = "nonactive">删除</button>
    </p>
  </li>
</template>

<script>
  export default {
    name: 'addToDo',
    props: ['title', 'titleIndex', 'titleList'],
    data() {
      return {
        haveDone: '未完成',
        isActive: false,
        nonActive: true,
        editStatus: false,
      };
    },
    methods: {
      removeList() {
        this.haveDone = '完成';
        this.isActive = true;
        this.nonActive = false;
      },
      changeEditStatus(titleIndex) {
        this.editStatus = true;
        let spanFocus = document.getElementById('test'+titleIndex);
        // console.log(spanFocus);
        setTimeout(function() {
          spanFocus.focus();
        }, 10);
      },
      updateList(listValue, target) {
        const myValue = listValue;
        myValue.content = target.innerHTML;
        this.editStatus = false;
      },
      deleteList(delIndex) {
        this.titleList.splice(delIndex, 1);
      },
      test(titleIndex) {
        return 'test'+titleIndex;
      },
    },
  };
</script>

<style scoped>
  * {
    box-sizing: border-box;
  }
  html, body {
    padding: 0;
    margin: 0;
  }
  li {
    margin: 5px auto;
    font-size: 18px;
    line-height: 26px;
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
</style>
