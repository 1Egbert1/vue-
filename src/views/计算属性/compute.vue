<template>
    <div>
      <!-- <h1>计算属性</h1> -->
      <h4>成绩优秀的人有:{{nameGroup.join(',')}}</h4>
      <!-- compute写法 -->
      <h4>{{allName}}</h4>

    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        nameGroup: [
            '小赵','小李','小郑','小红',
        ],
      };
    },
    computed: {
        allName(){
            return '成绩优秀的人有:'+ this.nameGroup.join(',')
        }
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .button-group {
    margin: 0 auto;
    margin-bottom: 12px;
    width: 200px;
    display: flex;
    justify-content: space-around;
  
    button {
      width: 90px; 
      height: 32px;
      border: 0;
      border-radius: 4px;
    }
  }
  .img-show {
    width: 500px;
  }
  </style>
  