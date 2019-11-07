import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


export default {
    components: {
        [Dialog.Component.name]: Dialog.Component
    }
}

Dialog.alert({
    title: '声明',
    message: '1. 本网站的转载内容中涉及的商品性能、参数和规格等均不代表官方信息，任何商品对应的参数和规格等信息仅以商品销售页面为准；' +
             '2. 本网站转载的内容归版权人所有，均已注明转载来源，如版权人对转载及内容有任何异议，请与我们联系，我们会立即更正或者删除有关内容；'+
             '3. 凡以任何行为实际使用本网站（包括但不限于注册、登录、使用、浏览等）视为您自愿接受本声明的约束。'
}).then(() => {
    // on close
});
