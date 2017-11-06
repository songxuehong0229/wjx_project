<template>
    <div id="foot">
        <ul>
            <router-link to="/" tag="li" active-class="active" exact>
                <i class="iconfont icon_home">&#xe604;</i>
                <span>首页</span>
            </router-link>
            <router-link to="/category" tag="li" active-class="active">
                <i class="iconfont icon_category">&#xe68d;</i>
                <span>分类</span>
            </router-link>
            <router-link to="/cart" tag="li" active-class="active">
                <i class="iconfont icon_cart">&#xe601;</i>
                <span>购物车</span>
                <b v-if="countA">{{countA}}</b>
            </router-link>
            <router-link to="/mine" tag="li" active-class="active">
                <i class="iconfont icon_mine">&#xe602;</i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    computed:{
        countA(){
            return this.$store.getters.countAll
        }
    }
}
</script>
<style type='text/css'>
@import "/static/style/common.css";
    #foot{
        font-size: .5rem; 
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;
        z-index: 1;
        background: #fff;
        /* background: red; */
    }
    #foot ul{
        width: 100%;
        height: 2rem;
        display: flex;
    }
    #foot ul li{
        width: 25%;
        height: 100%;       
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        padding: 5px 0;
        color: #cc0103;
        position: relative;
    }
    #foot ul li>span{
        font-size: .45rem;
        color: #999;
    }
    #foot ul li>b{
        width:1rem;
        height: 1rem;
        line-height: 1rem;
        font-weight: normal;
        font-size: .6rem;
        text-align: center;
        background: #cc0103;
        border-radius: 50%;
        color: #fff;
        position: absolute;
        top: 0;
        right: 15%;
    }
    @font-face {
        font-family: 'iconfont';  /* project id 376382 */
        src: url('//at.alicdn.com/t/font_376382_peddzaajityjsjor.eot');
        src: url('//at.alicdn.com/t/font_376382_peddzaajityjsjor.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_376382_peddzaajityjsjor.woff') format('woff'),
        url('//at.alicdn.com/t/font_376382_peddzaajityjsjor.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_376382_peddzaajityjsjor.svg#iconfont') format('svg');
    }
    #foot .icon_home{
        font-family: iconfont;
        font-size: 1rem;
        color: #999;
    }
    #foot .icon_category{
        font-family: iconfont;
        color: #999;
        font-size: 1.15rem;
        margin-bottom: -5px;
    }
    #foot .icon_cart{
        font-family: iconfont;
        color: #999;
        font-size: 1.1rem;
        margin-bottom: -3px;
    }
    #foot .icon_mine{
        font-family: iconfont;
        color: #999;
        font-size: 1rem;
        margin-bottom: -3px;
    }
    #foot>ul .active>i{
          color: #cc0103;  
    } 
    #foot>ul .active>span{
          color: #cc0103;  
    } 
</style>