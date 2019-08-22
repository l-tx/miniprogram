import request from './request.js'

const http = {
    // 登陆接口
    login: (obj) => requset({ url: '接口名称.html', data: obj, method: 'GET'}),
}

export default http;