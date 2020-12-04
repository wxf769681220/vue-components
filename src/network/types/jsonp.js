import originJsonp from 'jsonp'

/**
 * @param {String} url 'http://www.example.php/api' 纯净的URL地址
 * @param {Object} data { page: 1, pageSize: 10 } 将要追加到URL后的查询字符串数据
 * @param {Object} option { param: 'callback', timeout: 60000 } 选项
 */
export default function jsonp(url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    originJsonp(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

export function param(data) {
  let url = ''
  for (var k in data) {
    const value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}
