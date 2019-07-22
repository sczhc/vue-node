let express = require('express')
let port = process.env.PORT || 3000;
let app = express();
let api = require('./server/api.js');

app.listen(port);

//设置跨域访问
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// app.get('/api/user', api.user);
app.get('/api/message', api.message);
app.post('/api/query', api.query);

app.get('*', function (req, res) {
    res.json(500, { error: '请求错误' })
})