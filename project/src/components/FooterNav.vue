<template>
	<div class="foot">
		<div class="footcenter">
			<a href="/Home.vue" class="footlogo"></a>
			<div class="logodescipt">有用有趣的菜谱社区不再为吃什么而苦恼</div>
			<div class="links">
				<ul class="cleearfix">
					<li v-for="item in mylink" :key="item.key"><a href="#"><span>{{item.guanzhu}}</span></a>
					<p><a href="#">{{item.descript}}<br>{{item.descript1}}</a></p>
					</li>
				</ul>
			</div>
		</div>
        <div class="footcenter1">
            <dl class="friend_link">
				<dt>友情链接</dt>
				<dd v-for="item in frienddata" :key="item.key"> <a href="item.myurl">{{item.name}}</a> </dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		name: "FooterNav",
		data () {
			return {
				mylink:[
					{key:1,guanzhu:"关注:49万",descript:"点击进入",descript1:"十里飘香官方微博"},
					{key:1,guanzhu:"关注",descript:"点击进入",descript1:"十里飘香QQ空间"},
					{key:1,guanzhu:"",descript:"扫描二维码添加",descript1:"十里飘香微信好友"},
					{key:1,guanzhu:"",descript:"点击进入",descript1:"十里飘香移动端"}
					],
				frienddata:[
					{name:"美食",url:"/",key:1},
					{name:"体质测试",url:"/",key:1},
					{name:"伊特",url:"/",key:1},
					{name:"9酷音乐网",url:"/",key:1},
					{name:"365音乐网",url:"/",key:1},
					{name:"图吧",url:"/",key:1},
					{name:"汽车论坛",url:"/",key:1},
					{name:"39健康饮食",url:"/",key:1},
					{name:"	QQ下载",url:"/",key:1},
					{name:"家具网",url:"/",key:1},
					{name:"搜狐美食",url:"/",key:1},
					{name:"美食天下",url:"/",key:1},
					{name:"中华美食网",url:"/",key:1},
					{name:"合肥公交网",url:"/",key:1},
					{name:"红餐微杂志",url:"/",key:1},
					{name:"北京搜房网",url:"/",key:1},
					{name:"更多友情链接",url:"/",key:1},
				]
			}
		}
	}
</script>

<style scoped>
li{list-style: none;}
	.foot {
		height: 404px;
		padding-bottom: 60px;
		background-color: #1B1C1E;
	}
	.footcenter{
		width: 990px;
		height: 190px;

		margin:0 auto; 
		position: relative;
	}
	.footlogo{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 210px;
		height: 100%;
		background-image: url("../assets/logo.jpg");
		background-size:auto 100%;

	}
	.logodescipt{
		width: 212px;
		height: 100px;
		color: white;
		letter-spacing:4px;
		font:normal  bold  19px 宋体;
		position: absolute;
		left: 210px;
		top:50%;
		margin-top: -22px;
	}
	.links{
		width: 500px;
		height: 100%;
		position: absolute;
		right: 0px;
		top: 0px;
	}
	.cleearfix{
		width: 100%;
		height: 100%;
		}
 .cleearfix>li{
	 width: 105px;
	 height: 100%;
	 margin-top: 30px;
	 float: left;
	 margin-left: 20px;
 }
 .cleearfix>li>a{
	 width: 105px;
	 height: 105px;
	 display: inline-block;
	 overflow: hidden;
	 position: relative;
 }
 .cleearfix>li>a>span{
	 width: 100%;
	 height: 26px;
	 line-height: 26px;
	 position: absolute;
	 left: 0px;
	 bottom: 0px;
	 color: white;
	 font-size: 12px;
 }
  .cleearfix>li:nth-child(1)>a{
	 background-image: url("../img/weibo.jpg");
	 background-size: 100% 100%;
 }
 .cleearfix>li:nth-child(1)>a>span{
	 background-color: #FF3232;
 }
  .cleearfix>li:nth-child(2)>a{
	 background-image: url("../img/qqkongjian.jpg");
	 background-size: 105px 120px;
 }
 .cleearfix>li:nth-child(2)>a>span{
	 background-color: #39ACCD;
 }
  .cleearfix>li:nth-child(3)>a{
	 background-image: url("../img/weixin.png");
	 background-size: 100% 100%;
 }
   .cleearfix>li:nth-child(4)>a{
	 background-image: url("../img/yidongduan.jpg");
	 background-size: 100% 100%;
 }
 .cleearfix>li>p>a{
	 color: #999;
	 font-size: 12px;
 }
  .cleearfix>li>p>a:hover{
      color: white;
  }
  .footcenter1{
	  width: 990px;
	  height: 119px;
	  margin: 0 auto;

  }
  .friend_link{
	  width: 990px;
	  height: 99px;
	  padding: 10px 0px;
  }
   .friend_link>dt{
	  width:100%;
	  height: 40px;
	  text-align: left;
	  border-bottom: 1px solid gray;
	  margin-bottom: 8px;
      float: left;
	  font-size: 14px;
      color: #fff;
   }
   .friend_link>dd{
	   width: 99px;
	   height: 25px;
       float: left;
	   line-height: 25px;
	
   }
   .friend_link>dd>a{
	   color: #999;
	   font-size: 12px;
	   text-align: left;
   }
   .friend_link>dd>a:hover{
	   color: #fff;
   }
</style>