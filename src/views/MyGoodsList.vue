<template>
  <div>
    <MyTable :arr="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            type="text"
            class="tag-input from-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            v-focus
            v-model="scope.row.inputValue"
            @blur="scope.row.inputVisible = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="
              {
                scope.row.inputVisible = true;
              }
            "
          >
            +Tab
          </button>
          <span
            v-for="(str, ind) in scope.row.tags"
            :key="ind"
            class="badge badge-warning"
            >{{ str }}</span
          >
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="del(scope.row.id)">
            删除
          </button>
          <button class="btn btn-danger btn-sm" v-isShow=0 >
            编辑
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '@/components/MyTable';
export default {
  name: 'VuecliDemo07MyGoodsList',
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.$axios({
      url: '/api/goods',
    }).then((res) => {
      this.list = res.data.data;
    });
  },
  mounted() {},

  methods: {
    del(val) {
      const index = this.list.findIndex((ele) => ele.id == val);
      this.list.splice(index, 1);
    },
    clickFn() {
      this.inputShow = true;
    },
    enterFn(obj) {
      if (obj.inputValue.trim() == '') {
        return alert('请输入');
      }
      obj.tags.push(obj.inputValue);
      obj.inputValue = '';
    },
  },
};
</script>

<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
