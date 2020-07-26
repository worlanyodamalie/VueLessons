var app = new Vue({
    el: '#app',
    data: {
        product: 'socks',
        description: 'This is a description for socks',
        image: '../assets/socks.jpg',
        link: 'https://www.google.com/',
        instock: false,
        details: ["80% cotton" , "20% polyester" , "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColor: "green"
            },
            {
                variantId: 2235,
                variantColor: "blue"
            }
        ]
    }
})