// Mixin.js
let Mixin = {
  props: {
      weight:{
          default: 10
      }
  },
  created() {
      console.log('mixin')
  },
  methods:{
      onClick(){
          this.data++;
      }
  }
};
export default Mixin;