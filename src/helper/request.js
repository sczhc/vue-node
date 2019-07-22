import axios from 'axios'
import $q from 'q'
import { $utils } from '../helper'
import router from '../router'

function requrestHandle(options = {}) {
    let defer = $q.defer()
    // const token = localStorage.getItem('application-token')
    // if (token) {
    //     options.headers = {
    //         Authorization: `Bearer ${token}`,
    //         ...options.headers,
    //     }
    // }
    axios(options)
        .then(res => {
            const data = res.data;
            if (res.status === 200) {
                if (data.code === 0 || data.code === undefined || data.code === 100) {
                    defer.resolve(data);
                } else if (data.code === 401) {
                    router.replace({ name: 'home' });
                    defer.reject(data);
                } else {
                    defer.reject(data);
                }
            } else if (res.status === 401) {
                router.replace({ name: 'home' })
                defer.reject(data);
            } else {
                defer.reject({ message: '服务器发生错误，请稍后再试' });
            }
        })
        .catch(err => {
            if (err.response.status === 401) {
                router.replace({ name: 'home' })
            }
            defer.reject({ message: '服务器发生错误，请稍后再试' });
        })
    return defer.promise;
}

export default {
    post: (url, params) => {
        return requrestHandle({
            method: 'post',
            url: $utils.queryString(url),
            data: JSON.stringify(params),
            // headers: {
            //     Accept: 'application/json',
            //     'Content-Type': 'application/json;charset=utf-8'
            // }
        })
    },
    get: (url, params) => {
        return requrestHandle({
            mathod: 'get',
            url: $utils.queryString(url, params),
        })
    }
}