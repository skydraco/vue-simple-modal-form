import Modal from './Modal.vue';

const SimpleModalForm = {
  install: function (Vue, options) {
    // Let's register our component globally
    // https://vuejs.org/v2/guide/components-registration.html
    Vue.component('simple-modal-form', Modal);
  }
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(SimpleModalForm);
}

export default Modal;