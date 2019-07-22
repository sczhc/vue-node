export default {
    queryString(url, query) {
        let str = [];
        for (let key in query) {
            str.push(key + '=' + query[key]);
        }
        let paramStr = str.join('&');
        return paramStr ? `${url}?${paramStr}` : url;
    }
};
