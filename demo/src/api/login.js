import * as config from './config'
import axios from 'axios'
export function login(username,password) {
	return axios.post(config.urls.login, {
		username: username,
		password: password,
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}
export function regist(username,password) {
	return axios.post(config.urls.regist, {
		username: username,
		password: password,
	}).then((res) => {
		return Promise.resolve(res.data)
	})
}