import http from '../request/api.js'
const wxlogin = () => {
        return new Promise((resolve, reject) => {
            wx.login({
                success(res) {
                    // 登陆成功
                    if (res.code) {
                        http.login({
                            data: {
                                code: res.code
                            },
                        }).then(res => {
                            resolve(res)
                            console.log('登陆接口调用成功')
                        }).catch(error => {
                            reject(error)
                        })
                    } else {
                        // 登陆失败
                        console.log('登录失败！' + res.errMsg)
                    }
                }
            })
        })
    }
    // 授权用户信息
    const getUserInfo = (e) => {
            return new Promise((resolve, reject) => {
                if (e.detail.userInfo) {
                    resolve()
                } else {
                    reject()
                }
            })
        }
        
        // 授权手机号
    const getPhone = (e) => {
        return new Promise((resolve, reject) => {
        })

        }

    module.exports = {
        wxlogin,
        getUserInfo,
        getPhone
    };