app.component('product-display', {
    props: {
        premium:{
            type: Boolean,
            required: true
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img :class="{ 'out-of-stock-img': !inStock }" v-bind:src="image"> <!-- :src-->
      </div>
      <div class="product-info">
        <h1>{{ fullTitle }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <!-- v-if v-else-if else-if -->
        <p>Shipping: {{ shipping }}</p>
        <a :href="url">First Vue App</a>
        <ul>
            <li v-for="detail in details">{{ detail }}</li> <!-- multiple li s-->
        </ul>
        <div v-for="(variant, index) in variants" :key="variant.id" @mouseover="updateVariant(index)" class="color-circle" :style="{ backgroundColor: variant.color }"></div>
        <!-- <ul>
          <li v-for="(size, index) in sizes" :key="index">{{ size }}</li>
        </ul> -->
        <button
         class="button"
         :class="{ disabledButton: !inStock}" 
         :disabled="!inStock"
         v-on:click="addToCart">
         Add to Cart
        </button> <!-- @click--> <!-- can use ternary operations in class binding. [isActive ? activeClass : '']-->
        <button
         class="button"
         @click="removeFromCart">
         Remove Item
        </button>
      </div>
    </div>
    <review-list v-if="reviews.length" :reviews="reviews"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
      return {
        product: 'Socks',
        brand: 'Vue',
        description: 'A warm fuzzy pair of socks.',
        selectedVariant: 0,
        url: 'https://jinsoraj.github.io/VueApp/',
        inventory: 100,
        details: ['50% cotton', '30% wool', '20% poly'],
        variants: [
            { id: 123, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50},
            { id: 124, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0}
        ],
        sizes: ['S', 'M', 'L', 'XL'],
        reviews: []
        }
    },
    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id) // payload
        },
        removeFromCart() {
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index){
            this.selectedVariant = index
        },
        addReview(review){
            this.reviews.push(review)
        }
    },
    computed: {
        fullTitle(){
            return this.brand + ' ' + this.product
        },
        image(){
            return this.variants[this.selectedVariant].image

        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        shipping(){
            if (this.premium){
                return 'Free'
            }
            return 2.99
        }
    }
})