import axios from 'axios'
import $q from 'q'
import { $utils } from '../helper'
import { getToken, removeToken } from './auth'
import router from '../router'

const codeMessage = {
    'Bad credentials': '無法登陸，請檢查賬戶或密碼',
    'Login timeout': '登陸超時',
    'Server error': '服務器錯誤'
}

const domain = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : ''

function requrestHandle(options = {}) {
    let defer = $q.defer()
    if (getToken() !== undefined) {
        options.headers = {
            'Authorization': `Bearer ${getToken()}`,
            ...options.headers
        }
    }
    options.baseURL = domain
    axios(options)
        .then(res => {
            if (res.status === 200) { // 处理200
                const data = res.data;
                if (data.code === 0 || data.code === undefined || data.code === 100) { // 处理成功
                    defer.resolve(data);
                } else if (data.code === 401 || data.code === 403) {
                    removeToken()
                    router.replace({ name: 'login' });
                } else {
                    defer.reject(data);
                }
            } else if (res.status === 401 || res.status === 403) { // 处理token失效
                removeToken()
                router.replace({ name: 'login' })
                defer.reject(codeMessage['Login timeout'])
            } else {
                defer.reject(codeMessage['Server error'])
            }
        })
        .catch(() => {
            // 访问API出错
            defer.reject(codeMessage['Server error'])
        })
    return defer.promise;
}

export default {
    post: (url, params) => {
        return requrestHandle({
            method: 'post',
            url: $utils.queryString(url),
            data: JSON.stringify(params)
        })
    },
    get: (url, params) => {
        return requrestHandle({
            mathod: 'get',
            url: $utils.queryString(url, params)
        })
    }
}