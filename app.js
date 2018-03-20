var express = require('express');
var app = new express();

var bodyParser = require('body-parser');

var navJSON = { "code": 200, "data": { "pagination": { "page": 0, "size": -1, "totalPage": 1, "total": 13 }, "result": [{ "id": 3, "title": "钱段子", "sortId": 15, "module": 1 }, { "id": 2001, "title": "基金课堂", "sortId": 14, "module": 1 }, { "id": 12, "title": "债券", "sortId": 12, "module": 1 }, { "id": 11, "title": "保险", "sortId": 11, "module": 1 }, { "id": 10, "title": "房产", "sortId": 10, "module": 1 }, { "id": 9, "title": "银行理财", "sortId": 9, "module": 1 }, { "id": 8, "title": "互联网理财", "sortId": 8, "module": 1 }, { "id": 6, "title": "基金", "sortId": 6, "module": 1 }, { "id": 5, "title": "股市", "sortId": 5, "module": 1 }, { "id": 1001, "title": "理财攻略", "sortId": 4, "module": 1 }, { "id": 2, "title": "综合理财", "sortId": 3, "module": 1 }, { "id": 7, "title": "信用卡", "sortId": 2, "module": 1 }, { "id": 1, "title": "推荐", "sortId": 1, "module": 1 }] } };
var listJSON = { "code": 200, "data": { "pagination": { "page": 0, "size": 10, "totalPage": 50, "total": 496 }, "result": [{ "id": 150002, "title": "建行境外返现：领走你的3700元羊毛！", "url": "http://qian.163.com/article/150002.do", "onlineTime": 1521513000000, "tags": ["信用卡"], "imgUrl": "https://nos.netease.com/jizhang/c26caed75be12e9b50978851cf822c85.jpg", "character": 0, "author": "狗蛋说卡", "linked": false }, { "id": 149008, "title": "买电影票小技巧，免费或低价", "url": "http://qian.163.com/article/149008.do", "onlineTime": 1521426600000, "tags": ["信用卡"], "imgUrl": "https://nos.netease.com/jizhang/0e42ddbefe519adde441bd0df51aa9bc.jpg", "character": 0, "author": "木木说卡", "linked": false }, { "id": 149009, "title": "快速申请信用卡的秘诀一次告诉你", "url": "http://qian.163.com/article/149009.do", "onlineTime": 1521426000000, "tags": ["信用卡"], "imgUrl": "https://nos.netease.com/jizhang/bc2972904191c89c7f64ce3995c052ac.jpg", "character": 0, "author": "一一妈妈说理财", "linked": false }, { "id": 149005, "title": "一篇读完四大外资银行信用卡攻略", "url": "http://qian.163.com/article/149005.do", "onlineTime": 1521334800000, "tags": ["信用卡"], "character": 0, "author": "Mr北的卡片研习所", "linked": false }, { "id": 149004, "title": "5招提额8万元！交行信用卡提额新技巧爆料", "url": "http://qian.163.com/article/149004.do", "onlineTime": 1521289800000, "tags": ["信用卡"], "character": 0, "author": "融360卡达人", "linked": false }, { "id": 149002, "title": "信用卡分期实际利息高达22.34%！如何分期才合适？", "url": "http://qian.163.com/article/149002.do", "onlineTime": 1521208800000, "tags": ["信用卡"], "character": 0, "author": "融360卡达人", "linked": false }, { "id": 149001, "title": "3月适合申请的信用卡：网购有积分，白金卡免年费", "url": "http://qian.163.com/article/149001.do", "onlineTime": 1521208800000, "tags": ["信用卡"], "character": 0, "author": "融360卡达人", "linked": false }, { "id": 148019, "title": "3·15也可以拿一波“福利”", "url": "http://qian.163.com/article/148019.do", "onlineTime": 1521172800000, "tags": ["信用卡"], "character": 0, "author": "Mr北的卡片研习所", "linked": false }, { "id": 148017, "title": "补缴近万元，税单能进件申卡就好了！", "url": "http://qian.163.com/article/148017.do", "onlineTime": 1521167400000, "tags": ["信用卡"], "character": 0, "author": "木木说卡", "linked": false }, { "id": 148011, "title": "分享‖平安旅游白5.5万额度炼成记", "url": "http://qian.163.com/article/148011.do", "onlineTime": 1521082800000, "tags": ["信用卡"], "imgUrl": "https://nos.netease.com/jizhang/9a719e0f57f56b17405fdf3e9a17a0b2.jpg", "character": 0, "author": "Mr北的卡片研习所", "linked": false }] } };

Array.prototype.shuffle = function () {
    var input = this;
    for (var i = input.length - 1; i >= 0; i--) {
        var randomIndex = Math.floor(Math.random() * (i + 1));
        var itemAtIndex = input[randomIndex];
        input[randomIndex] = input[i];
        input[i] = itemAtIndex;
    }
    return input;
}

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//设置跨域访问  
app.all('*', function(req, res, next) {  
    res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",' 3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
});

app.get('/nav.do', function(req, res) {
    console.log(req.query);
    res.send(navJSON);
});

app.post('/list.do', function(req, res) {
    console.log(req.body);
    listJSON.data.result = listJSON.data.result.shuffle();
    res.send(listJSON);
})

app.listen(3000, function() {
    console.log('server started!');
});