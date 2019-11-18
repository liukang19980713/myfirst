<template>
	<div>
		<el-input v-model="input" placeholder="邮箱/手机号码/小米ID"></el-input>
		<el-input v-model="input" placeholder="密码"></el-input>
		<el-input v-model="input" type="button">登录</el-input>
	</div>
</template>

<script>
	export default {
		name: "Account",
		data() {
			return {
				input: ''
			}
		}
	}
</script>

<style>
</style>