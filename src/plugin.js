import Vue from 'vue'
import SimpleModalForm from './Modal.vue';

module.exports = {
  install: function (Vue, options) {
    Vue.component('simple-modal-form', SimpleModalForm);
  }
};

export default SimpleModalForm