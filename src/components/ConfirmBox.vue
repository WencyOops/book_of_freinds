<template>
  <div class="dialog-wrapper" v-if="show">
    <div class="overlay"></div>
    <div class="dialog">
      <h4>{{title}}</h4>
      <p class="content">{{content}}</p>
      <div>
        <button @click="ok">はい</button>
        <button @click="cancel">いいえ</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ConfirmBox",
  data() {
    return {
      promiseStatus: null,
      show: false,
      title: "",
      content: ""
    };
  },
  methods: {
    confirm() {
      let _this = this;
      this.show = true;
      return new Promise(function (resolve, reject) {
        _this.promiseStatus = { resolve, reject };
      });
    },
    ok() {
      this.show = false;
      this.promiseStatus && this.promiseStatus.resolve();
    },
    cancel() {
      this.show = false;
      this.promiseStatus && this.promiseStatus.reject();
    },
  },
};
</script>
