## 1.搭建架构
		nodejs + express + mongodb + Bootstrap
## 2.插件
		hotNode 							热更新  
		mongoose 							操作mongodb  
		connect-redis + express-session  	管理session 
		ioredis 							操作redis  
		loader 								Node静态资源加载器 
		bcryptjs  							密码加密  
		compression 						压缩gzip(网站效率优化) 
		connect-busboy 						实现文件上传  
		cors 								跨域 
		csurf 								防止csurf攻击 
		helmet 								应用加固(网站安全：xss攻击，脚本注入，非安全请求) 
		jpush-sdk 							推送通知 
		lodash 								js数据操作工具库 
		log4js 								日志管理工具 
		nodemailer 							发邮件 
		passport 							用户注册登录验证 
		pm2 								node进程管理工具  
		superAgent							ajax请求 
		utility								字符串加密 
		validator							校验 
		xss									对用于输入内容进行过滤，防止xss攻击  
		express-ejs-layouts    express4.X不支持layout   注意点: 从子页面传的值要使用locals. 例如：locals.title 
		async            异步流程控制 
## 3.开发注意点
		include 文件时.html 后缀名要带上, 支持传参数
		首次渲染会存在传递的数据不存在的情况，需要作异常处理
		分页采用地址栏传递分页参数，数据库使用skim,limit,exec(数据量大时，比较慢)