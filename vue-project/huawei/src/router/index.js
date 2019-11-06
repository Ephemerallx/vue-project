import Vue from 'vue'
import VueRouter from 'vue-router'
import homepage from "../../views/homepage";
import classify from "../../views/classify";
import discovery from "../../views/discovery";
import mine from "../../views/mine";
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
            path:'/mine',
            component:mine,
        }
    ]
})