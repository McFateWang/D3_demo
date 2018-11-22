/*
	作为检验用户是否正确登录的模块
*/
//检验
exports.check_user = function(req, res){
	// 接收表单信息，存储于变量中
	var user_name = req.query.user_name;
	var user_pwd = req.query.user_pwd;
	// 验证用户名和密码 正确则输出json数据
	if(user_name == 'wang' && user_pwd == '123456') {
		console.log('\n用户登录成功...');
		console.log('登录用户名： ', user_name, '密码： ', user_pwd);
		return true;
	}
	// 返回一个报错页面
	else {
		console.log('\n用户登录失败...');
		console.log('登录用户名： ', user_name, '密码： ', user_pwd);
		return false;
	}
}
