/**
 * 作者：夏冬琦
 */


/**
 * 服务器配置类
 */
class Server {
	/**
	 * 构造方法
	 * @param {*} serverConfig 
	 * 	参数说明：
	 * 	{
	 * 		ip:'服务器ip地址',
	 * 		port:服务器端口号,
	 * 		app:'服务应用名称'
	 * 	}
	 */
	constructor(serverConfig) {

		if (!serverConfig) {
			if (window.localStorage) {//是否存在本地存储对象

				let ip = window.localStorage.getItem('server.ip');
				let port = window.localStorage.getItem('server.port');
				let app = window.localStorage.getItem('server.app');

				if (!ip || !port || (!app && !(app === ''))) {
					this.serverConfig = undefined;
				} else {
					this.serverConfig = {
						ip: ip,
						port: port,
						app: app
					}
				}

			} else {
				this.serverConfig = undefined;
			}

		} else {

			if (!serverConfig.ip || !serverConfig.port || (!serverConfig.app && !(serverConfig.app === ''))) {
				this.serverConfig = undefined;
			} else {
				this.serverConfig = {
					ip: serverConfig.ip,
					port: serverConfig.port,
					app: serverConfig.app
				};
				window.localStorage.setItem('server.ip', this.serverConfig.ip);
				window.localStorage.setItem('server.port', this.serverConfig.port);
				window.localStorage.setItem('server.app', this.serverConfig.app);
			}


		}

	}

	/**
	 * 设置服务器参数
	 * @param {} serverConfig 
	 */
	setConfig(serverConfig) {

		if (!serverConfig || !serverConfig.ip || !serverConfig.port || (!serverConfig.app && !(serverConfig.app === ''))) {
			this.serverConfig = undefined;
		} else {
			this.serverConfig = {
				ip: serverConfig.ip,
				port: serverConfig.port,
				app: serverConfig.app
			};
			window.localStorage.setItem('server.ip', this.serverConfig.ip);
			window.localStorage.setItem('server.port', this.serverConfig.port);
			window.localStorage.setItem('server.app', this.serverConfig.app);
		}
	}



	/**
	 * 获得基础url
	 */
	baseURL() {
		if (this.serverConfig) {

			let _ip = this.serverConfig.ip ? this.serverConfig.ip : 'localhost';
			let _port = this.serverConfig.port ? (this.serverConfig.port == 80 ? '' : `:${this.serverConfig.port}`) : '';
			let _app = this.serverConfig.app ? '' : `/${this.serverConfig.app}`;

			return `http://${_ip}${_port}${_app}`;
		}
		return '';

	}


}

//默认的服务器配置
Server.prototype.defaultServerConfig = {
	ip: 'localhost',
	port: 80,
	app: ''
};

/**
 * 服务器配置实例
 */
const $server = new Server();

/**
 * 自定义的axios实例
 */
const $axios = axios.create({
	baseURL: $server.baseURL(),
	withCredentials: true//向服务器发送认证信息（session）
});


console.log(`baseUrL:${$axios.defaults.baseURL}`);

if (Vue) {

	/**
	 * 将服务器配置实例定义Vue的原型属性 
	 */
	Vue.prototype.$server = $server;

	Vue.prototype.$axios = $axios;//为vue设置原型属性$axios

	/**
	 * 给Vue添加原型方法 获取服务器配置
	 */
	Vue.prototype.$getServerConfig = function () {
		return this.$server.serverConfig ? this.$server.serverConfig : this.$server.defaultServerConfig;
	}

	/**
	 * 给Vue添加原型方法 设置服务器配置
	 */
	Vue.prototype.$setServerConfig = function (serverConfig) {
		this.$server.setConfig(serverConfig);
		this.$axios.defaults.baseURL = this.$server.baseURL();
		console.log(`baseUrL:${this.$axios.defaults.baseURL}`);
	};


	Vue.prototype.$ajax = function (getAxiosPromise, loadingText) {

		let promise = new Promise((resolve, reject) => {

			try {

				const loading = layer.open({ type: 2 ,content:loadingText });//加载层

				getAxiosPromise()
					.then(res => {

						layer.close(loading);//关闭加载层

						let result = res.data;

						if (!result.hasOwnProperty('logined')) {
							resolve(result);
							return;
						}

						if (!result.logined) {

							layer.open({
								style: 'background-color:#CC0000;color:white;',
								content: '您已下线，请登录！',
								skin: 'msg',
								time: 2 //2秒后自动关闭
							});

							window.setTimeout(() => { window.top.location.href = '../../safty/login/index.html'; }, 1500);
							return;
						}

						resolve(result);

					})
					.catch(err => {
						layer.close(loading);//关闭加载层
						console.log(err);
						if(err.response){
					
							layer.open({
								style: 'background-color:#CC0000;color:white;',
								content: '错误代码：'+err.response.status,
								skin: 'msg',
								time: 2 //2秒后自动关闭
							});
							return;

						}
						if(err.request.status==0){
							layer.open({
								content: '地址 '+err.config.url+' 没有响应，请检查服务器设置是否正确。',
								skin: 'footer',
								time: 10 //2秒后自动关闭
							});
						}

					});

			} catch (error) {
				console.log(error);				
				layer.open({
					style: 'background-color:#CC0000;color:white;',
					content: 'JavaScript的代码错误！',
					skin: 'msg',
					time: 2 //2秒后自动关闭
				});

				throw e;
			}

		});

		return promise;

	};

	Vue.prototype.$myoprate = function (getAxiosPromise, confirmInfo) {

		let promise = new Promise((resolve, reject) => {

			if (confirmInfo && confirmInfo.message && confirmInfo.title) {

				this.$messagebox.confirm(confirmInfo.message, confirmInfo.title)
					.then(action => {
						this.$ajax(getAxiosPromise, '执行中，请等待.....')
							.then((result) => {

								if (result.success) {
									layer.open({										
										content: result.message,
										skin: 'msg',
										time: 2 //2秒后自动关闭
									});
									resolve(result);
								} else {
									layer.open({
										style: 'background-color:#CC0000;color:white;',
										content:  result.message,
										skin: 'msg',
										time: 2 //2秒后自动关闭
									});
								}

							});
					})
					.catch(cancel => {
						layer.open({										
							content: '操作已取消！',
							skin: 'msg',
							time: 1 //2秒后自动关闭
						});
					});



			} else {
				this.$ajax(getAxiosPromise)
					.then((result) => {

						if (result.success) {
							layer.open({										
								content: result.message,
								skin: 'msg',
								time: 2 //2秒后自动关闭
							});
							resolve(result);
						} else {
							layer.open({
								style: 'background-color:#CC0000;color:white;',										
								content: result.message,
								skin: 'msg',
								time: 2 //2秒后自动关闭
							});
						}

					});

			}

		});

		return promise;

	}

	/*
		给Vue添加原型方法 向服务器发出get请求，返回promise，
		then方法的参数是一个函数，该函数的参数为服务器发送的未经包装响应数据
	*/
	Vue.prototype.$myGet = function (url, config) {

		let promise = new Promise((resolve, reject) => {

			this.$ajax(() => $axios.get(url, config))
				.then((result) => {
					resolve(result);
				});

		});

		return promise;
	};

	/*
		给Vue添加原型方法 向服务器发出post请求，返回promise，
		then方法的参数是一个函数，该函数的参数为服务器发送的未经包装响应数据
	*/
	Vue.prototype.$myPost = function (url, data, config) {

		return this.$myoprate(() => { return $axios.post(url, data, config); }, config);

	};

	/*
		给Vue添加原型方法 向服务器发出put请求，返回promise，
		then方法的参数是一个函数，该函数的参数为服务器发送的未经包装响应数据
	*/
	Vue.prototype.$myPut = function (url, data, config) {

		return this.$myoprate(() => { return $axios.put(url, data, config); }, config);

	};

	/*
		给Vue添加原型方法 向服务器发出delete请求，返回promise，
		then方法的参数是一个函数，该函数的参数为服务器发送的未经包装响应数据
	*/
	Vue.prototype.$myDelete = function (url, config) {

		return this.$myoprate(() => { return $axios.delete(url, config); }, config);

	};

}

//浅拷贝对象的属性
const $copyObject = function (srcObj) {
	let newObj = {};
	for (let prop in srcObj) {
		newObj[prop] = srcObj[prop];
	}
	return newObj;
}


