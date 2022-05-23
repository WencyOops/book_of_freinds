<template>
  <div class="frame">
    <div class="child">
      <transition mode="out-in" appear>
        <FriendList
          @showUserDetailWithIndex="showUserDetail"
          v-if="showList"
          :tableData="tableData"
        />
        <FriendDetail
          @showList="switchToList"
          v-else
          :tableData="tableData"
          :currentIndex="currentIndex"
        />
      </transition>

    </div>
  </div>
</template>

<script>
import FriendList from "./FriendList.vue";
import FriendDetail from "./FriendDetail.vue";
import axios from "axios";
export default {
  name: "BookOfFriends",
  components: {
    FriendList,
    FriendDetail,
  },
  data() {
    return {
      tableData: [],
      showList: true,
      currentIndex: 0,
    };
  },
  mounted() {
    axios.get("http://localhost:8081/users").then((res) => {
      this.tableData = res.data;
    });
  },
  methods: {
    switchToList: function () {
      this.showList = true;
    },
    showUserDetail: function (data) {
      this.showList = false;
      this.currentIndex = data;
    },
  },
};
</script>