// 引入axios
import axios from 'axios'

// 配置通用的基础路径和请求超时时间
const ajax = axios.create({
  // 前缀路径
  baseURL: '/wy',
  // 连接请求超时时间
  timeOut: 100000
})

// 请求拦截器
ajax.interceptors.request.use(config => {
  return config
})

// 响应拦截器
ajax.interceptors.response.use(
  response => {
    // 响应成功后返回的是数据response.data，不是response
    return response.data
  },
  error => {
    alert(error.message || '未知错误')

    // 中断Promise链，具体的请求就不能再处理了
    // return new Promise(() => {})

    // 返回失败的Promise，具体的请求可以再处理
    return Promise.reject(error)
  }
)

// 向外暴露ajax
export default ajax
