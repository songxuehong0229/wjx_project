
<template>
    <div id="paly">
        <div class="zw-paly-header">
            <router-link to="/mine" tag="h1"><i class="iconfont icon_left">&#xe614;</i></router-link>
            <p>全部订单</p>
        </div>
        <div class="zw-paly-content">
            <p>无相关订单数据...</p>
        </div>
        <div class="zw-paly-footer">
            <p>
                <label>
                   <i class="iconfont icon_z">&#xe603;</i>
                </label>
                <i>全选</i>
                <span>实付总额:￥<i class="zw-footer-i">0.00</i></span>
            </p>
            <p>合并付款</p>
        </div>
    </div>
</template>
<script>
export default {
   
}
</script>
<style type='text/css'>
#paly{
    height: 100%;
    width: 100%;
}
.zw-paly-header{
    display: flex;
    height: 2.5rem;
    width: 100%;
    background: #fff;
    align-items: center;
    font-size: .6rem;
}
.zw-paly-header h1{
    margin-left: .3rem;
    width: 40%;
}
.zw-paly-content{
    width: 100%;
    text-align: center;
}
.zw-paly-content p{
    padding-top: .5rem;
    font-size: .6rem;
}
.zw-paly-footer{
    width: 100%;
    height: 2.5rem;
    background: #fff;
    display: flex;
    font-size: .6rem;
    position: fixed;
    left: 0;
    bottom: 0;
    /*justify-content: space-around;*/
}
.zw-paly-footer p:first-of-type{
    width: 70%;
    height: 100%;
}
.zw-paly-footer p{
    display: flex;
    align-items: center;
    justify-content: center;
}
.zw-paly-footer p:last-of-type{
    width: 30%;
    font-size: .7rem;
    color: #fff;
    background: red;
    text-align: center;
    height: 100%;
}
.zw-paly-footer span{
    padding-left: 4rem;
}
.zw-footer-i{
    color: red;
}

@font-face {
    font-family: 'iconfont';  /* project id 376382 */
    src: url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.eot');
    src: url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.eot?#iefix') format('embedded-opentype'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.woff') format('woff'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.ttf') format('truetype'),
    url('//at.alicdn.com/t/font_khrhma74hu4k7qfr.svg#iconfont') format('svg');
}
.zw-paly-footer .icon_z{
    font-family: iconfont;
    color: red;
    /*opacity: .1;*/
    font-size: 1rem;
}
.icon_left{
    font-family: iconfont
}
</style>
