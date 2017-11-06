import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);

let state = {
	activeItem :{},
	goodsList:[],
	priceAll:0,
	countAll:0,
	count:0,
	activeItems:[],
	isLogin : false
}
let mutations = {
	addItem(state,item1){
		let cartItem = {
			productId : item1.pid,
			productName : item1.product_name,
			productDes : item1.english_name,
			productPrice : item1.final_price,
			productImg : item1.image_src,
			productCount : item1.count,
			productShow : true
		}
		if(state.goodsList.length == 0){
			state.goodsList.push(cartItem);
		}else{
			let a = 0;
			let flag = 0;
			for(let i=0;i<state.goodsList.length;i++){
				if(state.goodsList[i].productId == cartItem.productId){
					a = i;
					break;
				}else{
					flag++;
				}
			};
			if(flag == state.goodsList.length){
				state.goodsList.push(cartItem);				
			}else{
				state.goodsList[a].productCount += cartItem.productCount;
			}
		}
	},
	activeItem(state,item){
		state.activeItem = item;
	},
	activeItems(state,items){
		state.activeItems = items;
	},
	add(state,index){
		state.goodsList[index].productCount++;
	},
	reduce(state,index){
		if(state.goodsList[index].productCount > 1){
			state.goodsList[index].productCount--;			
		}else{
			state.goodsList[index].productCount=1;
		}
	},
	check(state,index){
		state.goodsList[index].productShow = !state.goodsList[index].productShow
	},
	allCheck(state,check){
		for(let i=0;i<state.goodsList.length;i++){
			state.goodsList[i].productShow =check;
		}
	},
	del(state){
		for(let i=state.goodsList.length-1;i>=0;i--){
			if(state.goodsList[i].productShow == true){
				state.goodsList.splice(i,1);
			}
		}
	},
	checkLogin(state,j){
		state.isLogin = j;
		return state.isLogin;
	}
}
let getters = {
	getItem(state){
		return state.activeItem;
	},
	getItems(state){
		return state.activeItems;
	},
	cartItems(state){
		return state.goodsList;
	},
	priceAll(state){
		state.priceAll=0;
		for(let i=0;i<state.goodsList.length;i++){
			if(state.goodsList[i].productShow == true){
				state.priceAll += state.goodsList[i].productPrice*state.goodsList[i].productCount
			}
		}
		return state.priceAll.toFixed(2);
	},
	countAll(state){
		state.countAll=0;
		for(let i=0;i<state.goodsList.length;i++){
			if(state.goodsList[i].productShow == true){
				state.countAll += state.goodsList[i].productCount
			}
		}
		return state.countAll;
	},
	checkLogin(state){
		return state.isLogin;
	}
}
export default new Vuex.Store({
    state,
    mutations,
    getters
})
