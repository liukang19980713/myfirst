<template>
<div class="headbox">
  <div class="box">
    <div class="headcenter">
      <a href="index.vue" class="logo"></a>
      <div class="serchbox">
        <el-input placeholder="请输入菜谱/食材/菜单/作者" v-model="input5" class="input-with-select myserch"></el-input>
        <el-button class="serchbutton">搜索</el-button>
      </div>
	  <div class="loginbox"> 	  
		  <a href="#" class="qqlogin">QQ登录</a>
		  <a href="#" class="weibologin">微博登录</a>
		  <a href="#" class="zhuce">注册</a>
		  <a href="#" class="denglu">登录</a>
	  </div>
    </div>
  </div>
  <div class="headerbox2">
      <ul class="centerbox2">
		  <li v-for="item in headername" :key="item.key" @click="mytextdecoration(item.key-1)" ref="li1">
         <router-link :to="item.uri" class=""><strong class="headtitle">{{item.name}}</strong></router-link>
      </li>
	  </ul>
  </div>
  </div>
</template>
<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      headername: [
        { name: "首页", uri: "/",key:"1"},
        { name: "菜谱大全", uri: "/",key:"2"},
        { name: "饮食健康", uri: "/",key:"3" },
        { name: "美食菜单", uri: "/",key:"4" },
        { name: "家居馆", uri: "/",key:"5"},
        { name: "美食达人", uri: "/",key:"6"},
        { name: "菜谱视频", uri: "/",key:"7"},
        { name: "产品下载", uri: "/" ,key:"8"}
    
      ]
    };
  },
  methods: {
    mytextdecoration:function(index){
      var headtitles=document.querySelectorAll(".headtitle")
      headtitles.forEach((el)=>{
        el.style.borderColor="transparent"
      })
     this.$refs.li1[index].firstChild.firstChild.style.borderBottom="4px solid #ff3232"
    }
  }
}
</script>
<style scoped>
a{text-decoration: none}
.box {
  background:linear-gradient(to right,#181819,#3E3E61);
  width: 100%;
  height: 129px;
}
.headcenter {
  width: 990px;
  height: 100%;
  margin: 0 auto;
}
.logo {
  width: 184px;
  height: 100%;
  float: left;
  background-image: url("../assets/logo.jpg");
  background-size: auto 129px;
}
.serchbox {
  width: 430px;
  height: 100%;
  float: left;
  margin-left: 68px;
  position: relative;
}
.myserch {
  width: 346px;
  height: 36px;
  position: absolute;
  padding: 2px 0px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  top: 0px;
  left: 0px;
  bottom: 0px;
  margin: auto;
}
.serchbutton {
  width: 78px;
  height: 40px;
  border: 2px solid white;
  background-color: #c90000;
  color: white;
  line-height: 8px;
  position: absolute;
  top: 50%;
  margin-top: -18px;
  right: 10px;
}
.serchbutton:hover{
   background-color: #890511;
}
.loginbox{
	width: 267px;
  height: 129px;
  float: right;
}
.loginbox>a{
	height: 28px;
	line-height: 28px;
	float: left;
	border-radius: 4px;
	color: #fff;
	font-size: 12px;
	margin-top: 50px;
}
.loginbox>a:hover{
   background-color: #890511;
   text-decoration: underline;
}
.qqlogin{
	width: 43px;
	padding: 0px 10px 0px 34px;
	background-image: url(https://s1.c.meishij.net/n/images/topdsflogin_icon.gif);
	background-repeat: no-repeat;
}
.weibologin{
	width: 48px;
	padding: 0px 10px 0px 34px;
	background-image: url(https://s1.c.meishij.net/n/images/topdsflogin_icon.gif);
	background-repeat: no-repeat;
	background-position: 0px -28px;
}
.zhuce{
	width: 24px;
	padding: 0px 10px;
}
.denglu{
	width: 24px;
	padding: 0px 10px;
}
.headerbox2{
	width: 100%;
	height: 76px;
  background-color: white;
  box-shadow: 0px 5px 8px rgb(143, 129, 129);
}
.centerbox2{
  width: 990px;
	height: 100%;
  margin: 0 auto;
   list-style: none;
}
.centerbox2>li{
  float: left;
}
.centerbox2>li>a{
  padding: 0px 24px;
  color:#444;
  line-height:76px;
  font-size: 18px;
}
.centerbox2>li>a:nth-child(5){
  padding: 0px 11px !important;
}
.headtitle{
  display: inline-block;
  height: 72px;
  border-bottom: 4px;
}
.headtitle:nth-child(1){
  border-bottom: 4px solid #ff3232;

}
</style>