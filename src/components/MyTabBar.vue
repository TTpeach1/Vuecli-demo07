<template>
  <div class="my-tab-bar">
    <div
      class="tab-item"
      v-for="item in list"
      :class="{ current: item.componentName == currentIndex }"
      :key="item.componentName"
      @click="clickFn(item.componentName)"
    >
      <!-- 图标 -->
      <span class="iconfont" :class="item.iconText"></span>
      <!-- 文字 -->
      <span>{{ item.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 'MyGoodsList',
    };
  },
  props: {
    list: {
      type: Array,
      validator(val) {
        // val就是接到数组
        if (val.length >= 2 && val.length <= 5) {
          return true;
        }
        return false;
      },
    },
  },
  methods: {
    clickFn(val) {
        this.currentIndex = val;
        this.$emit('tabName',val)
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.current {
  color: #1d7bff;
}
</style>
