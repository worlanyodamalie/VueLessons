//Inline template
Vue.component('click-counter' , {
    template: '<button @click="count++">{{count}}</button>',
    data(){
        return {count: 0}      
    }
})

// x-template

Vue.component('counter' , {
    template: '#counter',
    data() {
      return { count: 0 }
    }
})

Vue.component('plan' , {

})





// var app = new Vue({
//     el: '#app',
//     data: {
//         product: 'socks',
//         brand: 'Vue Mastery',
//         description: 'This is a description for socks',
//         selectedVariant: 0,
//         link: 'https://www.google.com/',
//         instock: true,
//         details: ["80% cotton" , "20% polyester" , "Gender-neutral"],
//         variants: [
//             {
//                 variantId: 2234,
//                 variantColor: "green",
//                 variantImage: '../assets/socks.jpg'
//             },
//             {
//                 variantId: 2235,
//                 variantColor: "blue",
//                 variantImage: '../assets/blue.jpg'

//             }
//         ],
//         cart: 0,
//     },
//     methods: {
//         addToCart: function(){
//             this.cart += 1
//         },
//         updateProduct: function(index){
//             // this.image = variantImage
//             this.selectedVariant = index
//             console.log(index)
//         }
//     },
//     computed: {
//         title() {
//             return this.brand + ' ' + this.product
//         },
//         image(){
//             return this.variants[this.selectedVariant].variantImage
//         }
//     }
// })