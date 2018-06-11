let app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: './assets/vmSocks-green.jpeg',
    inventory: 8,
    onSale: true,
    details: ['80% cotton', '20% polyester', 'Gender-neutral'],
    variants: [
      {
        variantId: 2234,
        variantColour: 'green',
        variantImage: './assets/vmSocks-green.jpeg'
      },
      {
        variantId: 2235,
        variantColour: 'blue',
        variantImage: './assets/vmSocks-blue.jpeg'
      }
    ],
    cart: 0
  },
  methods: {
    addToCart: function() {
      this.cart += 1;
    },
    changeSockColour: function() {
      this.image === '';
    }
  }
});
