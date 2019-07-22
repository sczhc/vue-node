import { $request } from '../helper';
const BASEURL = "http://localhost:3000";
const BASEPATH = "/api";

export default {
    // 获取数据
    getMessage(params = {}) {
        return $request.get(
            `${BASEURL}${BASEPATH}/messag`,
            params
        )
    },
    // 查询数据
    search(params = {}) {
        return $request.post(
            `${BASEURL}${BASEPATH}/query`,
            params
        )
    }
}