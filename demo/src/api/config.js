import axios from 'axios'
import Qs from 'qs'
import router from '../router/index'

axios.defaults.baseURL= "";//测试环境

// export const baseURL = axios.defaults.baseURL
export const urls = {
    login: "/api/login",//登录
    regist: "/api/regist"//注册
}

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

axios.interceptors.request.use((req) => {
//	if(req.method === 'post') {
//		req.data = Qs.stringify(req.data);
//	}
	return req;
}, (error) => Promise.reject(error));

////axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8'
axios.defaults.transformRequest = function(data) {
	return Qs.stringify(data);
//	let ret = ''
//	for(let it in data) {
//		ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
//	}
//	return ret
}

//export function addInterceptors() {

	// http response 拦截器  与后台提前定义正确code 错误的提示
	axios.interceptors.response.use(
		response => {
			if(response.data.code === 200) {
				//  	 Router.replace({
				//          path: '/login'
				//        })
				return response

            } else if(response.data.code === '2000001' ||response.data.code === '3000004' ) {
				// Message.error(response.data.msg)
				     router.push({
				          path: '/login'
				        })
			} else {
//				Message.error(response.data.msg)
				return response
			}
		},
		error => {
			if(error.response) {
				switch(error.response.status) {
					case 400:
						// 返回 401 跳转到登录页面
						router.push({
							path: '/login'
						})
						break
					case 401:
						// 返回 401 跳转到登录页面
						router.push({
							path: '/login'
						})
						break
					case 500:
//						router.push({
//							path: '/error/500'
//						})
						break
					case 404:
//						router.push({
//							path: '/error/404'
//						})
						break
					case 504:
//						router.push({
//							path: '/error/504'
//						})
						break
				}
			}
			return Promise.reject(error.response.data)
		}
	)
//}
