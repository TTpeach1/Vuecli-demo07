<template>
  <div>
    <MyHeader  title="Tabbar"></MyHeader>
    <div class="main">
      <component :is="comName"></Component>
    </div>
    <MyTabBar :list='tabList' @tabName='tabNameFn'></MyTabBar>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyTabBar from '@/components/MyTabBar'
import MyGoodsList from '@/views/MyGoodsList';
import MyGoodsSearch from '@/views/MyGoodsSearch';
import MyUserInfo from '@/views/MyUserInfo';
export default {
  name: 'VuecliDemo07App',

  data() {
    return {
      comName:'MyGoodsList',
      tabList: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  components:{
    MyTabBar,
    MyHeader,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
  mounted() {},

  methods: {
    tabNameFn(val){
      this.comName = val
    }
  },
};
</script>

<style scoped>
.main{
  padding-top: 45px;
  padding-bottom: 50px;
}
</style>
