import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from "../../views/homepage";
import classify from "../../views/classify";
import discovery from "../../views/discovery";
import cart from "../../views/cart";
import mine from "../../views/mine";
import detail from "../components/cart/product/detail";
Vue.use(VueRouter)

let router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/homepage',
        },
        {
            path:'/homepage',
            component:homepage,
        },
        {
            path:'/classify',
            component:classify,
        },
        {
            path:'/discovery',
            component:discovery,
        },
        {
            path:'/cart',
            component:cart
        },
        {
            path:'/detail',
            component:detail
        },
        {
            path:'/mine',
            component:mine,
        }
    ]
})

export default router