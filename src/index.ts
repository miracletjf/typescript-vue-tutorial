import Vue from 'vue'
import HelloComponent from './components/hello'

let v = new Vue({
  el: "#app",
  template: `
  <div>
    name:<input v-model="name" type="text">
    <hello-component :name="name" :initialEnthusiasm="5"/>
  </div>`,
  data: {
    name: `World`
  },
  components: {
    HelloComponent
  }
})