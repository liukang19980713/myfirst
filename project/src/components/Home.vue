<template>
	<div>
		<!--顶部导航栏-->
		<header-nav></header-nav>

		<!--中间导航栏-->
         <body-nav></body-nav>
		<!--中间内容区域-->
		<router-view></router-view>

		<!--底部-->
		<footer-nav></footer-nav>
<!-- 使用axios发送请求 -->
		<!-- <button @click="sendget"></button> -->
	</div>

</template>

<script>
	import HeaderNav from "./HeaderNav"
	import BodyNav from "./BodyNav"
	import FooterNav from "./FooterNav"

	export default {
		name: "Home",
		data() {
			return {
				
			}
		},
		components: {
			"header-nav": HeaderNav,
			"body-nav": BodyNav,
			'footer-nav': FooterNav
		},

		methods: {
			// sendget:function(){
			// 	this.$http.get("/user?id=123")
			// 	.then(function(response){
			// 		console.log(response)
			// 	})
			// 	.catch(function(error){
			// 		console.log(err);
			// 	});
			// } 
		}
	}
</script>

<style>

</style>