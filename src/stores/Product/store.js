// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";
//
// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   state: {
//     product: {}
//   },
//   getters: {
//     PRODUCT: state => {
//       return state.product
//     }
//   },
//   mutations: {
//     SET_PRODUCT: (state, product) => {
//       state.product = product
//     }
//   },
//   actions: {
//     SET_PRODUCT: async (context, name) =>{
//       console.log("gogo!!")
//       let {data} = await axios.get(`${baseURI}/api/${this.$route.path}`)
//       if(data.status === 200){
//         console.log(data)
//         context.commit('SET_PRODUCT', data.product)
//       }
//     }
//   }
// });
