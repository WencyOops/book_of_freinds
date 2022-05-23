<template>
  <div>
    <h2>友人一覧</h2>
    <div
      class="head"
      v-for="(item, index) in tableData"
      :key="index"
      @click="showUserDetail(index)"
    >
      <div class="user-list">{{ item.username }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FriendList",
  props: {
    tableData: [],
  },
  methods: {
    showUserDetail: function (index) {
      this.$emit("showUserDetailWithIndex", index);
    },
  },
};
</script>