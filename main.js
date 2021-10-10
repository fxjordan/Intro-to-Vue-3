const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
            ]
        }
    },
    methods: {
        addToCart() {
            this.cart += 1;
        },
        showVariantPreview(variantId) {
            /**
             * NOTE: We could have just used 'variantImage' as parameter and pass the correct
             * image from the view code. But, since I'm in the process of getting comfortable
             * with JavaScript again I just wanted to write some more complicated code.
             * 
             * And keeping the detail that an image should be changed out of the view code, by
             * just passing the variant ID is a nice way of encapsulation ;)
             */

            // 1. find the image to the given variant ID
            let variantImage;
            for (let variant of this.variants) {
                if (variant.id === variantId) {
                    variantImage = variant.image;
                    break;
                }
            }

            // 2. check ig found
            if (variantImage !== undefined) {
                this.image = variantImage;
                console.log('Changed image');
            } else {
                console.log('Error: Invalid variant ID: ' + variantId);
            }
        },
        removeOneFromCart() {
            this.cart--;
        }
    }
})
