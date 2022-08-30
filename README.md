
# Simple modal window

Simple modal window based on Vue and Vuex for adding custom content


## Installation

Install vue-simple-modal-form with npm

```bash
  npm install vue-simple-modal-form
```
or using yarn
```bash
 yarn add vue-simple-modal-form
```
    
### Browser
Include the script file, then install the component with Vue.use(SimpleModalWindow); e.g.:
```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-simple-modal-form/dist/plugin.js"></script>
<script type="text/javascript">
    Vue.use(SimpleModalForm);
</script>
```
### Module
```js
import SimpleModalForm from 'vue-simple-modal-form';
```
## Settings
Import modal form states:
```js
import Vuex from 'vuex'
import SimpleModalStorage from 'vue-simple-modal-form/dist/storage.js'

export default new Vuex.Store({
    modules: {
        ...
        modal: SimpleModalStorage
    }
})
```
## Using
Once installed, it can be used in a template as simply as:
```vue
<simple-modal-window :window-small="false">
    <div class="my-class">
        Hellow, world!
    </div>
</simple-modal-window>
```
```vue
<button @click="$store.commit('modal/CALL_MODAL', true)">
    Open modal window
</button>
```