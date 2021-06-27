<template>
  <div>
    <h1>v-bind简单demo</h1>
    <div class="button-group">
      <button @click="picIndex = picIndex + 1" :disabled="picIndex >= 3">
        下一张
      </button>
      <button @click="picIndex = picIndex - 1" :disabled="picIndex <= 1">
        上一张
      </button>
    </div>

    <img :src="picGroup[picIndex - 1].src" alt="图裂了" class="img-show" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      picIndex: 1,
      picGroup: [
        { src: require("../assets/19367CBCF3B03CC253455B4208074D76.jpg") },
        { src: require("../assets/df1cf3893f8930864cb44c121cc9b217.jpeg") },
        { src: require("../assets/92BC157ED69ED0F0300150C5B40565DE.jpg") },
      ],
    };
  },
  computed: {},
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
