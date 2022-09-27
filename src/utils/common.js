// common function input area

export default {
  data() {
    return {
      processingFlag : false
    }
  },
  computed: {
    username() {
      return this.userInfo.username;
    },
  },
  methods: {
    /**
     * 2度押し防止
    */
    startProcessing() {
    this.processingFlag = this.getMultyPageInf('doubleClickFlg', false)
    if (this.processingFlag) {
        return this.processingFlag;
    } else {
        this.processingFlag = true; 
        this.setMultyPageInf(this.processingFlag, 'doubleClickFlg')
        return false;
      }
    },

    endProcessing() {
        this.processingFlag = false;
        this.setMultyPageInf(this.processingFlag, 'doubleClickFlg')
    },
    
  }
}