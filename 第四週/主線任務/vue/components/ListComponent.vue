<template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="120">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in productsData" :key="index">
        <td>{{item.category}}</td>
        <td>{{item.title}}</td>
        <td class="text-right">{{item.origin_price}}</td>
        <td class="text-right">{{item.price}}</td>
        <td>
          <span v-if="item.enabled" class="text-success">啟用</span>
          <span v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
module.exports = {
  props: ["products-data"],
  methods:{
    openModal(statu, item){
      // console.log("ListComponent openModal", statu, item );
       this.$emit("open-modal", statu, item);
    }
  }
}
</script>
