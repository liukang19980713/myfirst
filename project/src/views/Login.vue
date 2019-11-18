<template>
	<div>
		<div class="top">
			<div class="logo">
				<a href=""></a>
			</div>
		</div>
		
		<div class="middle">
			<div class="mainbox">
				<div>
					<router-link class="check all" to="/account">账号登录</router-link>
					<router-link class="all" to="/twocode">扫码登录</router-link>
				</div>
				<router-view class="main"></router-view>
			</div>
		</div>
	</div>
	
	
</template>

<script>
	export default {
		name: "Login"
	}
</script>

<style scoped>
	.top {
		width: 1130px;
		height: 98px;
		margin: 0 auto;
	}
	.logo {
		width: 200px;
		height: 100%;
		background-image: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png);
	}
	
	.middle {
		width: 100%;
		height: 588px;
		background-image: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e8201bfbb8c9d474a48da76f7d81a5c7.jpg");
		background-repeat: no-repeat;
		background-position: top center;
		position: relative;
	}
	
	.mainbox {
		width: 410px;
		height: 497px;
		background-color: #fff;
		position: absolute;
		bottom: 0;
		right: 180px;
	}
	.all {
		font: 26px "黑体";
		color: #333;
		text-decoration: none;
		padding: 10px 20px;
		display: inline-block;
	}
	.check {
		color: #ff6700;
	}
	.all:hover {
		color: #ff6700;
	}
	.main {
		width: 80%;
		height: 100%;
		margin: 0 auto;
		background-color: pink;
	}
</style>