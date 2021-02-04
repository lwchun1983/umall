import { getIndexGoodsList, getGoodsList } from '@/api/goods'

// 首页商品数据默认值
const defaultIndexList = {
  hot: [],
  new: [],
  all: []
}
export default {
  // 启用命名空间 (虚拟目录)
  namespaced: true,
  state: {
    indexList: {...defaultIndexList}, // 首页的商品数据
    list: [] // 商品列表
  },
  mutations: {
    // 设置首页商品数据
    SET_INDEX_LIST (state, list) {
      state.indexList = list
    },
    SET_LIST (state, list) {
      state.list = list
    }
  },
  actions: {
    getIndexGoodsList ({ commit }) {
      // 通过接口获取数据
      getIndexGoodsList().then(res => {
        const list = {
          hot: res[0].content || [],
          new: res[1].content || [],
          all: res[2].content || []
        }
        commit('SET_INDEX_LIST', list)
      })
    },
    getGoodsList ({ commit }, payLoad) {
      getGoodsList(payLoad.id).then(res => {
        console.log(res)
        commit('SET_LIST', res)
      })
    }
  }
}