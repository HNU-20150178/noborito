// mixin.js
let mixin = {
  props: {
      weight:{
          default: 10
      }
  },
  created() {
      console.log('mixin')
  },
  methods:{
      onClick() {
          this.data++;
      },
      back() {
        let page = this.pageInfo.page;
        this.pageTransfer(page);
      },
      /**
       * @param {String} page     // ページ
       */
      pageTransfer(page){
        console.log(page);
      }
  }
};
export default mixin;