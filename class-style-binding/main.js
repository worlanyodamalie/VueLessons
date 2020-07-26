var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        description: 'This is a description for socks',
        image: '../assets/socks.jpg',
        link: 'https://www.google.com/',
        instock: true,
        details: ["80% cotton" , "20% polyester" , "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green",
                variantImage: '../assets/socks.jpg'
            },
            {
                variantId: 2235,
                variantColor: "blue",
                variantImage: '../assets/blue.jpg'

            }
        ],
        cart: 0,
    },
    methods: {
        addToCart: function(){
            this.cart += 1
        },
        updateProduct: function(variantImage){
            this.image = variantImage
        }
    }
})