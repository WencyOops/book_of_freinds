import Vue from 'vue'
import ConfirmBox from '@/components/ConfirmBox.vue'
const VueComponent = Vue.extend(ConfirmBox)
const vm = new VueComponent
vm.$mount()

let init = false;
let defaultOptions = {

}

const confirm = function(options) {
  Object.assign(vm, defaultOptions, options, {
    type:"confirm"
  })
  if(!init) {
    document.body.appendChild(vm.$el)
    init = true;
  }
  return vm.confirm();
}

export default confirm;