let app = getApp()

// 网络请求
const request = (params) => {
    let url = params.url ? (app.globalData.baseurl + params.url) : '';
    let data = params.data || {};
    let method = params.method || 'POST';
    let header = params.header || {'content-type': 'application/json'};
    return new Promise((resolve, reject) => {
        wx.request({
            url: url,
            data: data,
            method: method,
            header: header,
            dataType: 'json',
            success(res) { 
                resolve(res)
            },
            fail(res) {
                reject(res)
            }
        })
    })
}
export default request;