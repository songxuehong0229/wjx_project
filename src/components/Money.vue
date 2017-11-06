<template>
    <div id="paly">
        <div class="zw-paly-header">
            <router-link to="/mine" tag="h1"><i class="iconfont icon_left">&#xe614;</i></router-link>
            <p>退货/退款</p>
        </div>
        <div class="zw-paly-content">
            <p>暂无数据...</p>
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
    font-size: .6rem;
    background: ghostwhite;
    align-items: center;
}
.zw-paly-header h1{
   margin-left: .3rem;
    width: 40%;
}
.zw-paly-content{
    height: 88%;
    width: 100%;
    text-align: center;
}
.zw-paly-content p{
    padding-top: .5rem;
}
.icon_left{
    font-family: iconfont;
}
</style>