const urlMap = {
  development: 'http://retraction-news.elimbiojs.com',
  production: ''
}

const baseUrl = urlMap[process.env.NODE_ENV]

export default baseUrl
