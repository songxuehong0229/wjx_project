<template>
    <div class="zw-goshopping">
        <div class="go-header">
            <router-link to="/GoShopping/a" tag="p" active-class="active">今日闪购</router-link>
            <router-link to="/GoShopping/b" tag="p" active-class="active">明日预告</router-link>
        </div>
        <div class="bai"></div>
        <router-view></router-view>
    </div>
</template>

<script>
// import today from "./today.vue"
// import tomorrow from "./tomorrow.vue"

export default {
    
}
</script>

<style scoped>
.zw-goshopping{
    height: 100%;
    width: 100%;
    background: #ffffff;
}
.go-header{
    height: 6%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    border-bottom: .1rem solid #eee;
}
.go-header p{
    width: 50%;
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    border-bottom: .1rem solid transparent;
    
}
.go-header .active{
    border-bottom: .1rem solid red;
}

.bai{border-bottom: .6rem solid #f8f8f8;}
</style>
