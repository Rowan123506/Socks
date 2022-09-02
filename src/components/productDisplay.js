app.component("product-display", {
  template: ` 
  
  <div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img v-bind:src="image" />
      </div>

      <div class="product-info">
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of The Stock</p>
        <ul v-for="detail in details">
          <li>{{detail}}</li>
        </ul>

        <div v-for="(variant , i) in variants" class="color-circle pointer" :style="{ backgroundColor: variant.color }" :key="variant.id" @click="updateVariant(i)">
        </div>
        <!----------------------------Add To Cart --------------------------------->
        <div class="block-ruby">
        <button :disabled="!inStock" :class="{ disabledButton : !inStock}" class="button" @click="addToCart">Add to Cart</button>
        <button :disabled="!inStock" :class="{ disabledButton : !inStock}" class="danger" @click="removecart">Remove From card</button>\
        </div>
      </div>
    </div>
  </div>
  <review-list v-if="reviews.length" :reviews="reviews"></review-list>
  <review-form @review-submitted="addReview"></review-form>
  `,
  data() {
    return {
      brand: "Socks",
      product: "Vue 3",
      selectVariant: 0,
      reviews: [],
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 2234,
          color: "green",
          image: "/src/assets/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "/src/assets/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart");
    },
    updateVariant(index) {
      this.selectVariant = index;
    },
    removecart() {
      this.$emit("remove-to-cart", null);
    },
    addReview(review) {
      this.reviews.push(review);
    },
  },

  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectVariant].image;
    },
    inStock() {
      return this.variants[this.selectVariant].quantity;
    },
    
  },
});
