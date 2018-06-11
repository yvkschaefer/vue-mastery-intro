let app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: 'Socks',
        selectedVariant: 0,
        onSale: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        variants: [{
                variantId: 2234,
                variantColour: 'green',
                variantImage: './assets/vmSocks-green.jpeg',
                variantQuantity: 10
            },
            {
                variantId: 2235,
                variantColour: 'blue',
                variantImage: './assets/vmSocks-blue.jpeg',
                variantQuantity: 0
            }
        ],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        updateProduct(index) {
            this.selectedVariant = index;
        },
        removeFromCart() {
            this.cart -= 1;
        }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      onSaleMessage(){
        if (this.onSale && this.inStock) {
          return this.title + ' are on sale!'
        }
      },
      inStock(){
        return this.variants[this.selectedVariant].variantQuantity
      }
    }
});
