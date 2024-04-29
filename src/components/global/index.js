import Button from "./partials/Button.vue"
import Header from "./sections/Header.vue"
import Product_card from "./components/Product_card.vue"
import Product_swiper from "./sections/Product_swiper.vue";
const components=[
    {name: 'Button' , component: Button},
    {name: 'Header' , component: Header},
    {name: 'Product_card' , component: Product_card},
    {name: 'Product_swiper' , component: Product_swiper},
]
export default{
    install(app){
        components.forEach(({name, component})=>{
            app.component(name,component)
        })
    }
}
