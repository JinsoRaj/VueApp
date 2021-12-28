const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            description: 'A warm fuzzy pair of socks.',
            image: './assets/images/socks_green.jpg',
            url: 'https://jinsoraj.github.io/VueApp/',
            inStock: false,
            inventory: 100,
            details: ['50% cotton', '30% wool', '20% poly'],
            varients: [
                { id: 123, color: 'green', image: './assets/images/socks_green.jpg'},
                { id: 124, color: 'blue', image: './assets/images/socks_blue.jpg'}
            ],
            sizes: ['S', 'M', 'L', 'XL'],
            cart: 0
            
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
        },
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        },
        updateImage(varientImage){
            this.image= varientImage
        }
    }
})