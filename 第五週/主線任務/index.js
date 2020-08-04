Vue.component('loading-component', httpVueLoader('./vue/Frontend/components/LoadingComponent.vue'));
Vue.component('header-component', httpVueLoader('./vue/Frontend/components/HeaderComponent.vue'));

new Vue({
    el: '#app',
    data: {
        isLoading: false,
        uuid: '8dfebeff-1ee6-4014-8df4-02b6656f80e4',
        products: [],                                   // 所有商品列表
        showProductList: [],                            // 呈現商品列表
        productClassList: ['全部商品'],                  // 所有商品分類列表
        currentClass: '全部商品',
        productsCartCount: 0                            // 已加入購物車清單數量
    },
    filters: {
        // 轉換數字成含千分位的文字
        commaFormat(num) {
            if(!num){
                return "0";
            }
            let parts = num.toString().split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }
    },
    methods: {
        // 取得所有商品列表
        getData() {
            let vm = this;
            let url = `https://course-ec-api.hexschool.io/api/${this.uuid}/ec/products`;

            vm.isLoading = true;

            axios.get(url)
                .then(function (response) {
                    let products = response.data.data;
                    vm.products = products
                    vm.productClassification(products);
                    vm.showProducts();
                }).catch((err) => {
                    console.error("取得所有商品列表", err);
                }).finally(() => {
                    vm.isLoading = false;
                });
        },
        // 所有商品分類
        productClassification(products) {
            if (!products && products.length <= 0) {
                return;
            }
            let productClass = this.productClassList;
            products.forEach((productItem) => {
                if (productClass.indexOf(productItem.category) === -1) {
                    productClass.push(productItem.category);
                }
            });
            this.productClassList = productClass;
        },
        // 呈現商品列表
        showProducts() {
            let currentClass = this.currentClass;
            if ('全部商品' === currentClass) {
                this.showProductList = this.products;
            } else {
                this.showProductList = this.products.filter((productItem) => {
                    return productItem.category === this.currentClass;
                });
            }
        },
        // 點選商品分類列表
        classClickHandle(classItem) {
            if (this.currentClass === classItem) {
                return;
            }

            this.currentClass = classItem;
            this.showProducts();
        },
        // 加入購物車
        addCart(productId) {
            let productFind = this.products.find((item) => {
                return item.id === productId;
            });
            if (!productFind) {
                return;
            }
            let productsStorage = sessionStorage.getItem('productsCart');
            let productsCart = [];
            if (productsStorage) {
                productsCart = JSON.parse(productsStorage);
            }
            productsCart.push(productFind);
            sessionStorage.setItem("productsCart", JSON.stringify(productsCart));
            this.productsCartCount = ++this.productsCartCount;
        }
    },
    created() {
        this.getData();

        // 已加入購物車清單數量
        let productsStorage = sessionStorage.getItem('productsCart');
        if (productsStorage) {
            productsCart = JSON.parse(productsStorage);
            this.productsCartCount = productsCart.length;
        }
    },
    updated() { },
});