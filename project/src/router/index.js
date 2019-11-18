import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CloudService from '@/views/CloudService'
import Banking from '@/views/Banking'
import Login from '@/views/Login'
import Account from '@/views/Account'
import TwoCode from '@/views/TwoCode'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			children: [{
					path: "/cloudservice",
					name: "CloudService",
					component: CloudService
				},
				{
					path: "/banking",
					name: "Banking",
					component: Banking
				}
			]
		},
		{
			path: "/login",
			name: "Login",
			component: Login,
			children: [
				{
					path: "/account",
					name: "Account",
					component: Account
				},
				{
					path: "/twocode",
					name: "TwoCode",
					component: TwoCode
				}
			]
		}
	]
})