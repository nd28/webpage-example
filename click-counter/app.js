// @flow

const app = Vue.createApp({

})
.component('show-header',{
  template:
  `
  <p class="grid gap-4">
    <h1 style="font-family:Source Code Pro, system-ui;">{{header}}</h1>
    <input v-model="header">
  </p>
  `,
  data(){
    return {
      header: "Set Header..."      
    }
  }
})
.component('click-counter', {
  template:
  `
    <button class="button bg-gray-50 border-2 border-solid hover:border-indigo-600 hover:translate-x-1n hover:shadow-xl shadow-2xl rounded-lg px-4 py-2 m-5 font-light" @click="count++">{{prompt}}  '{{count}}'</button>
  `,
  props:{
    prompt:{type: String, required: true}
  },
  data(){
    return {
      count:0,
    }
  }
})
  .mount('#app') 
