import { $request } from '../helper';

export default {
    // 获取数据
    getMessage(params = {}) {
        return $request.get('/api/message', params)
    },
    // 查询数据
    search(params = {}) {
        return $request.post('/api/query', params)
    }
}