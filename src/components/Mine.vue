<template>
    <div id="mine">
        <div class="zw-header">
            <div class="zw-first">
                <div class="zw-active">
                    <i class="iconfont icon_a">&#xe796;</i>
                </div>
            </div>
            <div class="zw-second">
                <p>见习骑士</p>
                <div class="zw-second-div">
                    <p>用户名</p>
                    <p>余额：￥0&nbsp;&nbsp;&nbsp;积分：0&nbsp;&nbsp;&nbsp;成长值：0</p>
                </div>
            </div>
        </div>
        <div class="zw-caidan">
            <ul class="zw-caidan-ul">
                <router-link to="paly" tag="li">
                    <i class="iconfont icon_b">&#xe60b;</i>
                    <p>待支付</p>
                </router-link>
                <router-link to="daiCart" tag="li">
                    <i class="iconfont icon_c">&#xe64a;</i>
                    <p>待收货</p>
                </router-link>
                <router-link to="Money" tag="li">
                    <i class="iconfont icon_d">&#xe612;</i>
                    <p>退款</p>
                </router-link>
            </ul>
        </div>
        <div class="zw-content">
            <ul class="zw-content-ul">
                <li>
                    <!--<label>全部订单</label>-->
                    <span>全部订单</span>
                    <label class="zw-content-i"><i>查看全部订单</i></label>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <span>充返订单</span>
                    <label class="zw-content-i"><i>查看全部订单</i></label>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
            </ul>
            <p class="zw-content-p"></p>
        </div>
        <div class="zw-nav">
            <ul class="zw-nav-ul">
                <li>
                    <p>
                        <i class="iconfont icon_e">&#xe605;</i>&nbsp;
                        <span>我的收藏</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_f">&#xe619;</i>&nbsp;
                        <span>VIP账户</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_g">&#xe607;</i>&nbsp;
                        <span>极品卡</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_h">&#xe60d;</i>&nbsp;
                        <span>提货卡</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_i">&#xe701;</i>&nbsp;
                        <span>优惠券</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_j">&#xe608;</i>&nbsp;
                        <span>会员俱乐部</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
                <li>
                    <p>
                        <i class="iconfont icon_k">&#xe630;</i>&nbsp;
                        <span>个人管理</span>
                    </p>
                    <p class="iconfont icon_right">&#xe613;</p>
                </li>
            </ul>
            <p class="zw-nav-p"></p>
        </div>
        <div class="zw-footer"></div>
    </div>
</template>
<script>
export default {

}
</script>
<style type='text/css'>
@import "/static/style/common.css";
.zw-nav-ul-p{
    border-right: 1px solid;
    border-bottom: 1px solid;
    transform: rotate(-45deg);
    position: absolute;
    top: 38%;
    right: 2%;
    width: 3%;
    height: 23%;
}
.zw-nav-ul-p1{
    border-right: 1px solid;
    border-bottom: 1px solid;
    transform: rotate(-45deg);
    position: absolute;
    width: 9%;
    height: 49%;
    right: 7%;
    top: 25%;
}
#mine{
    font-size: 16px;
    background: #fff;
    width: 100%;
    height: 100%;
   color: #434343;
}
.icon_right{
    font-family: iconfont;
}
.zw-header{
    color: #fff;
    text-align: center;
    width: 100%;
    height: 10rem;
    background-image: url(/static/img/4c5e542257d72dadde869a9476aa6221.jpg);
    background-size: cover;
}
.zw-first{padding-top: 1.5rem;height: 50%;}
.zw-second{height: 50%;}
.zw-second-div{
    margin-top: .4rem;
}
.zw-second-div p:first-of-type{
    margin-bottom: 10px;
    font-size: .65rem;
}
.zw-second-div p:last-of-type{
    color: orangered;
    font-size: .6rem;
}
.zw-active{
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: #fff;
    line-height: 3rem;
    margin: 0 auto;
}
.zw-second>p:last-of-type{
    font-size: .7rem;
}
.zw-second>p{
    font-size: .7rem;
    /* padding-bottom: .4rem; */
}
.zw-caidan-ul{
    display: flex;
    padding: 1rem 0;
}
.zw-caidan-ul li{border-right: 1px solid gainsboro;width: 33.33%;text-align: center;}
.zw-caidan-ul li:last-of-type{border:none;}

.zw-content-ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.zw-content-ul li{
    width: 90%;
    display: flex;
    justify-content: space-between;
}
.zw-content-ul li{
    border-top: 1px solid gainsboro;
    padding: .5rem 0;
}
.zw-content-ul li span{
    width: 60%;
}
/* .zw-content-i i{padding-right: .5rem;} */
.zw-content-p{
    background: #f5f5f5;
    height: .6rem;
    border-top: 1px solid gainsboro; 
    border-bottom: 1px solid gainsboro; 
}
.zw-nav-ul{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.zw-nav-ul li{
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: .5rem 0;
    border-bottom: 1px solid gainsboro;
    width: 90%;
}
.zw-nav-ul li:last-of-type{
    border:none;
    
}
.zw-nav-p{
    background: #f5f5f5;
    height: 1rem;
    border-top: 1px solid gainsboro; 
    border-bottom: 1px solid gainsboro; 
}
.zw-footer{
    
    padding-top: 2rem;
}

@font-face {
    font-family: 'iconfont';  /* project id 376382 */
    src: url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.eot');
    src: url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.woff') format('woff'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.svg#iconfont') format('svg');
}
.zw-active .icon_a{
    font-family: iconfont;
    color: #999;
    font-size: 2rem;
}
.zw-caidan-ul .icon_b{
    font-family: iconfont;
    color: orangered;
    font-size: 1.5rem;
}
.zw-caidan-ul .icon_c{
    font-family: iconfont;
    color: green;
    font-size: 1.5rem;
}
.zw-caidan-ul .icon_d{
    font-family: iconfont;
    color: purple;
    font-size: 1.5rem;
}
.zw-nav-ul li .icon_e{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_f{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_g{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_h{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_i{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_j{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
.zw-nav-ul li .icon_k{
    font-family: iconfont;
    color: #999;
    font-size: .8rem;
}
</style>