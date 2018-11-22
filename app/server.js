/*
  Node.js程序的入口，包含了开启服务器和路由功能
*/

// 导入默认模块
var express = require('express');
var app = express();
// 导入自定义模块
var wj_mysql = require('./models/wj_mysql.js');
var wj_user = require('./models/wj_user.js');

/*
  设置静态文件路径，浏览器以及执行中的js都可以访问这些资源
  这个文件夹之外的其他资源必须通过路由发送
*/
app.use(express.static('public'));

/*
  设置路由
*/
// 默认界面，服务器开启成功
app.get('/', function (req, res) {
  res.send('The server is running correctly.');
})

// 获取index页面
app.get('/index', function (req, res) {
  res.sendFile( __dirname + "/views/index.html" );
})

// 获取map页面
app.get('/get_D3_map', function(req, res) {
  res.sendFile( __dirname + "/views/map.html");
})

// 用户登录后获取J2j界面
app.get('/get_D3_j2j', function (req, res) {
  //通过验证返回json数据
  if(wj_user.check_user(req, res)) {
    wj_mysql.load_mysql(req, res);
  }
  else {
    res.sendFile( __dirname + "/views/login_error.html" );
  }
})

/*
  打开服务器
*/
//本地监听，端口为8081
var server = app.listen(8081, "127.0.0.1", function () {
  // url地址的路径及端口名称
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port) 
})