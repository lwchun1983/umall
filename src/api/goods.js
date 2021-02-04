import http from './http'

// 获取首页的商品列表
export const getIndexGoodsList = () => {
  return http.get('/getindexgoods')
}

/*
  @ 获取商品总数
  @params fid number 一级分类ID
  @params sid number 二级分类ID
  @params keyword string 搜索关键词
*/
export const getGoodsTotal = (fid, sid, keyword = '') => {
  return http.get('/goodscount', {
    params: {
      fid,
      sid,
      keyword
    }
  }).then(res => res[0].total || 0)
}

// 分页获取商品列表
/*
  @ 获取商品总数
  @params fid number 一级分类ID
  @params sid number 二级分类ID
  @params page number 当前页码
  @size page number 每页查询数量
*/
export const getGoodsList = (fid, sid, page = 1, size = 5) => {
  return http.get('/goodslist', {
    params: {
      fid,
      sid,
      page,
      size
    }
  })
}