/*
	作为连接数据库的模块
*/
// 测试
exports.hello = function(req, res){
	res.send('hello!!!');
}

//载入 期刊数据
exports.load_mysql = function(req, res){
	// 引入MySQL模块
	var mysql = require('mysql');
	// 新建连接对象，输入用户密码数据库名称
	var connection = mysql.createConnection(
		{
			host : 'localhost',
			user : 'root',
			password: 'qweasd9095',
			port : '3306',
			database : 'web_user'
		});
	// 建立连接
	connection.connect();
	// 定义sql查询语句
	var sql = 'select * from j2j_edge';
	// 在连接中发起query语句，返回结果到数组rows中
	// var data = {}; // 用于保存query返回的数据


	connection.query(sql, function(err, result) {
		if(err){
			console.log('语句执行发生错误 - ', err.message);
			return;
		}
		console.log('成功连接到数据库...\n数据传输中......');
		//使用res的json参数返回数据
		res.json(result);
	});
	// 关闭连接
	connection.end();
}

