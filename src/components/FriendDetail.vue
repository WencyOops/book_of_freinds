<template>
  <div>
    <table>
      <tr>
        <th>
          <button @click="onReturn">一覧に戻る</button>
        </th>
        <th>
          <button>保存</button>
        </th>
        <th>
          <button @click="onDelete(localCurrentIndex)">削除</button>
        </th>
        <th>
          <button class="prev" @click="onTurnPage(-1)">前</button>
        </th>
        <th>
          <button class="next" @click="onTurnPage(1)">次</button>
        </th>
      </tr>
    </table>
    <table>
      <tr>
        <td>
          <label>名前</label>
        </td>
        <td>
          <input type="text" :value="tableData[localCurrentIndex].username" />
        </td>
      </tr>
      <tr>
        <td>
          <label>出生年月</label>
        </td>
        <td>
          <input type="text" :value="tableData[localCurrentIndex].birthday" />
        </td>
      </tr>
      <tr>
        <td>
          <label>好きな食べ物</label>
        </td>
        <td>
          <input
            type="text"
            :value="tableData[localCurrentIndex].favoriteFood"
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>好きな動物</label>
        </td>
        <td>
          <input
            type="text"
            :value="tableData[localCurrentIndex].favoriteAnimal"
          />
        </td>
      </tr>
      <tr>
        <td>
          <label>コメント</label>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <textarea
            class="text-comment"
            :value="tableData[localCurrentIndex].comment"
          ></textarea>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FriendDetail",
  props: {
    tableData: [],
    currentIndex: Number,
  },
  data() {
    return {
      localCurrentIndex: this.currentIndex,
    };
  },
  methods: {
    onReturn: function () {
      this.$emit("showList", true);
    },
    onTurnPage: function (count) {
      let targetIndex = this.localCurrentIndex + count;
      if (targetIndex >= 0 && targetIndex <= this.tableData.length - 1) {
        this.localCurrentIndex = targetIndex;
      }
    },
    onDelete: function (index) {
      this.$confirm({
        title: "確認",
        content: "削除を確認しますか？",
      })
        .then(() => {
          let uid = this.tableData[index].uid;
          axios.delete("http://localhost:8081/users/" + uid).then(() => {
            console.log("success");
          });
        })
        .catch(() => {
          console.log("cancel");
        });
    },
  },
};
</script>