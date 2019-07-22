let fs = require('fs');

exports.message = function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return console.error(err);
        data = JSON.parse(data);
        res.json({ data });
    })
}

exports.query = function (req, res) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        if (err) return console.error(err);
        data = JSON.parse(data);
        let person = data.data;
        req.on('data', function (params) {
            // decodeURIComponent() 函数可对 encodeURIComponent() 函数编码的 URI 进行解码
            params = JSON.parse(decodeURIComponent(params));
            if (params) {
                // 模糊查询
                let data = person.filter(v => Object.values(v).some(obj => new RegExp(params.data + '', 'i').test(obj)));
                res.json({ data });
            } else {
                res.json({ data });
            }
        })
    })
}