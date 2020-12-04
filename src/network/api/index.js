import axios from 'axios'
import baseUrl from './config'

const publicParams = {
  // openid: 'ooBLz52Xd9W6C7z5GLrppF_Gd04M',
  timestamp: Date.now(),
  md5: '123456'
}

// 文章列表（pubmed）
export function getPubmedPaperList(params, openid) {
  const url = baseUrl + '/mobile/client/pubmed/searchPubmedPaper'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 文章详情（pubmed）
export function getPubmedPaperDetail(params, openid) {
  const url = baseUrl + '/mobile/client/pubmed/getPubmedPaperDetail'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 文章列表（pubpeer）
export function getPubpeerPaperList(params, openid) {
  const url = baseUrl + '/mobile/client/pubpeer/searchPubpeerPaper'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 文章详情（pubpeer）
export function getPubpeerPaperDetail(params, openid) {
  if (!openid) {
    openid = {}
  }
  const url = baseUrl + '/mobile/client/pubpeer/getPubpeerPaperDetail'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 添加订阅任务
export function addSubscribe(params, openid) {
  const url = baseUrl + '/mobile/client/user/saveMySubscribe'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 我的订阅
export function getMySubscribe(openid) {
  const url = baseUrl + '/mobile/client/user/getMySubscribe'
  const data = Object.assign({}, publicParams, openid, { subscribe_type: 0 })
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 数据源最后更新时间
export function dataLastUpdateTime() {
  const url = baseUrl + '/mobile/client/systemvalue/getDataSourceUpdatetime'
  return axios({
    method: 'post',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 问题反馈
export function userFeedback(params, openid) {
  const url = baseUrl + '/mobile/userFeedBack/submitFeedback'
  const data = Object.assign({}, publicParams, params, openid)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取openid
export function getWxOpenId(code) {
  const appid = 'wx5531a86a5aff8a27'
  const url = baseUrl + `/mobile/wx/oauth2/getWxOpenid?code=${code}&appid=${appid}`
  return axios({
    method: 'get',
    url: url
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据任务id获取日报或周报数据
// http://retraction-news.elimbiojs.com/paper-list?type=dw&taskId=
export function getDailyReport(params) {
  const url = baseUrl + '/mobile/client/wxTempMsg/getDailyReport'
  const data = Object.assign({}, params)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 根据任务id查询撤稿记录表（周报）
// http://retraction-news.elimbiojs.com/retractions?type=r&taskId=
export function getWeekRetractions(params) {
  const url = baseUrl + '/mobile/client/wxTempMsg/getWeekRetractions'
  const data = Object.assign({}, params)
  return axios({
    method: 'post',
    url: url,
    data: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 获取code
// http://119.45.228.45/wx/oauth2/xxx?code=011l0r0w3jTziV29Av3w35DMje4l0r0I

// 获取openid
// http://119.45.228.45/wx/oauth2/getWxOpenid?code=011l0r0w3jTziV29Av3w35DMje4l0r0I

// 日报周报
// http://119.45.228.45/wx-message?taskId=id

// 撤稿
// http://119.45.228.45/retractions?taskId=id

// 根据任务id查询 查询日报记录表
// wxTempMsg/getByretractionsList

// 根据任务id  查询撤稿记录表
// wxTempMsg/getBytempMsgPushTasId
