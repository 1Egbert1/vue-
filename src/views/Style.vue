<template>
  <div>
    <h1>动态绑定style-对象</h1>
    <div class="button-group">
      <button @click="changeColor('#ed5a65')" :disabled="isActive">
        点击变红
      </button>
      <button @click="changeColor('#2f90b9')" :disabled="!isActive">
        点击变蓝
      </button>
    </div>
    <div class="color-container" :style="{ background: bgc }">这是显示区域</div>
    <h1>style-数组</h1>
    <div class="button-group">
      <button @click="change(1)" :disabled="isclick">点击激活</button>
      <button @click="change(2)" :disabled="!isclick">取消激活</button>
    </div>
    <div :style="[border, back]" class="contain">
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
      bgc: "",
      border: { borderRadius: "", border: "" },
      back: { background: "" },
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
    changeColor(color) {
      this.bgc = color;
      this.isActive = !this.isActive;
    },
    change(type) {
      if (type === 1) {
        this.isclick = true;
        this.border.border = "2px solid #777";
        this.border.borderRadius = "4px";
        this.back.background = "#ed5a65";
      } else if (type === 2) {
        this.isclick = false;
        this.border.border = "";
        this.border.borderRadius = "";
        this.back.background = "";
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
.color-container {
  width: 400px;
  height: 150px;
  line-height: 150px;
  margin: 0 auto;
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
