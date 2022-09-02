const app = Vue.createApp({
  data() {
    return {
      cart: [],
      
    };
  },
  methods: {
    updateCard(){
      this.cart++;
    },
    removecard(){
      this.cart=0
    },
  },
});
