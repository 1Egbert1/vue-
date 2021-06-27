<template>
  <div>
    <h1>动态绑定class-对象</h1>
    <div class="button-group">
      <button @click="active(1)" :disabled="isActive">点击激活</button>
      <button @click="active(2)" :disabled="!isActive">取消激活</button>
    </div>
    <ul class="text-container">
      <li
        v-for="item in textList"
        :key="item.id"
        :class="{ single: item.liStatus, double: !item.liStatus }"
      >
        {{ item.content }}
      </li>
    </ul>
    <h1>动态绑定class-数组</h1>
    <div class="button-group">
      <button @click="change(1)" :disabled="isclick">点击激活</button>
      <button @click="change(2)" :disabled="!isclick">取消激活</button>
    </div>
    <div :class="[border, back]" class="contain">
      {{ isclick ? "已激活" : "未激活" }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      isclick: false,
      border: "",
      back: "",
      textList: [
        {
          id: 1,
          content: "这是第1个",
          liStatus: false,
        },
        {
          id: 2,
          content: "这是第2个",
          liStatus: true,
        },
        {
          id: 3,
          content: "这是第3个",
          liStatus: false,
        },
        {
          id: 4,
          content: "这是第4个",
          liStatus: true,
        },
        {
          id: 5,
          content: "这是第5个",
          liStatus: false,
        },
      ],
    };
  },
  computed: {},
  methods: {
    active(type) {
      if (type === 1) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
      this.textList.map((item) => {
        item.liStatus = !item.liStatus;
      });
    },
    change(type) {
      if (type === 1) {
        this.isclick = true;
        this.border = "border";
        this.back = "back";
      } else if (type === 2) {
        this.isclick = false;
        this.border = "unborder";
        this.back = "unback";
      }
    },
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

.text-container {
  width: 150px;
  margin: 0 auto;
  list-style: none;
  li {
    height: 32px;
    line-height: 32px;
  }
  .single {
    background-color: #999;
  }
}
.contain {
  width: 300px;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
}
.border {
  border-radius: 10px;
  border: 2px solid #777;
}
.unborder {
  border: 0;
  border-radius: 0;
}
.back {
  background-color: aqua;
}
.unback {
  background-color: white;
}
</style>
