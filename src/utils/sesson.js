export default {
	methods: {
    /**
		 * マルチページ情報を取得する。
		 * 
		 * @param {*} id 画面ID
		 * @param {*} flg 削除判定フラグ
		 */
		getMultyPageInf(id, flg) {
			let val = '';
			if (!this.isNullEmpty(this.$store.getters.pageInf)) {
				val = new Map(this.$store.getters.pageInf)
				val = val.get(id)
			}
			if (flg) {
				this.$store.commit('SET_PAGE_INF', '')
			}
			return val
		},
		/**
		 * マルチページ情報を設定する。
		 * 
		 * @param {*} pageInf ページ情報
		 * @param {*} id 画面ID
		 */
		setMultyPageInf(pageInf, id) {
			var map = new Map();
			if (this.$store.getters.pageInf) {
				map = new Map(this.$store.getters.pageInf)
			}
			map.set(id, pageInf)

			this.$store.commit('SET_PAGE_INF', Array.from(map.entries()))
    },
  }
}