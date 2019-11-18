<template>
  <div class="bodybox">
    <div class="centerbodybox">
      <div class="lunbobox">
          <div class="lunbotu"></div>
      </div>
      <h3 class="h3title">十一月，养阴润燥，补肾护阳
         <span class="paixu">
        <a href="https://www.meishij.net/shicai/">更多食材></a>
      </span>
      </h3>
     

    </div>
  </div>
</template>

<script>
export default {
  name: "BodyNav",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style>
a{
  text-decoration: none;
}
a:hover{
  text-decoration: underline;
}
.bodybox {
  width: 100%;
  height: 1959px;
  margin-top: 120px;
}
.centerbodybox {
  width: 990px;
  height: 100%;
  margin: 0 auto;
  background-color: rgb(189, 125, 125);
}

.lunbobox {
  width: 100%;
  height: 382px;
  position: relative;
}
.lunbotu {
  width: 5000px;
  margin: 0 auto;
  height: 382px;
  position: absolute;
  left: 50%;;
  margin-left: -2500px;
  top: 0px;
  background-color: aliceblue;
}
.h3title {
  width: 100%;
  height: 120px;
  background-color: aqua;
  line-height: 120px;
  font-size: 24px;
  color: #222;
  text-align: center;
  font-family: Microsoft Yahei;
  position: relative;
  display: block;
  font-weight: normal;
}
.paixu{
  float: right;
}
.paixu>a{
  font-size: 12px;
  color: #222;
  font-family:宋体
}
.paixu>a:hover{
  color: #ff3232;
}
</style>
