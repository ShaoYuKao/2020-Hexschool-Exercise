// Class 設定檔案
VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    }
});

// 加入至 VeeValidate 的設定檔案
VeeValidate.localize('tw', zh_TW);

Vue.component('loading-component', httpVueLoader('./vue/Frontend/components/LoadingComponent.vue'));
Vue.component('header-component', httpVueLoader('./vue/Frontend/components/HeaderComponent.vue'));

// 將 VeeValidate input 驗證工具載入 作為全域註冊
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);

// 將 VeeValidate 完整表單 驗證工具載入 作為全域註冊
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);

new Vue({
    el: '#app',
    data: {
        isLoading: false,
        uuid: '8dfebeff-1ee6-4014-8df4-02b6656f80e4',
        products: [],           // 所有商品列表
        productsCartCount: 0,
        amount: 0,              // 總額
        form: {
            name: '',
            email: '',
            tel: '',
            address: '',
            payment: '',
            message: '',
        },
    },
    filters: {
        // 轉換數字成含千分位的文字
        commaFormat(num) {
            if (!num) {
                return "0";
            }
            let parts = String(num).split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }
    },
    methods: {
        // 遞增購物車商品數量
        addProductCount(productId) {
            let products = this.products;
            products.forEach((product) => {
                if (product.id === productId) {
                    product.count = product.count + 1;
                }
            });
            this.products = products;
            this.modifyProductsStorageCount();
        },
        // 遞減購物車商品數量
        reduceProductCount(productId) {
            let products = this.products;
            products.forEach((product) => {
                if (product.id === productId) {
                    if (product.count === 1) {
                        product.count = 1;
                    } else {
                        product.count = product.count - 1;
                    }
                }
            });
            this.products = products;
            this.modifyProductsStorageCount();
        },
        // 刪除購物車商品
        deleteProduct(productId) {
            console.log("deleteProduct", productId);

            let products = this.products;
            let newProducts = [];
            products.forEach((product) => {
                if (product.id !== productId) {
                    newProducts.push(product);
                }
            });
            this.products = newProducts;
            this.modifyProductsStorageCount();
        },
        // 監聽使用者修改購物車商品數量
        modifyProductCount(productId) {
            let products = this.products;
            products.forEach((product) => {
                if (product.id === productId) {
                    if (product.count <= 0) {
                        product.count = 1;
                    }
                }
            });
            this.products = products;
            this.modifyProductsStorageCount();
        },
        // 修改已加入購物車清單數量
        modifyProductsStorageCount() {
            let productsStorage = sessionStorage.getItem('productsCart');
            let productDatas = JSON.parse(productsStorage);
            let products = this.products;

            if (!productDatas && productDatas.length <= 0) {
                return;
            }
            let newProductsStorage = [];
            products.forEach((product) => {
                var productStorageFind = productDatas.find((productStorage) => {
                    return productStorage.id === product.id;
                });
                if (productStorageFind) {
                    for (let index = 0; index < product.count; index++) {
                        newProductsStorage.push(productStorageFind);
                    }
                }
            });

            sessionStorage.setItem("productsCart", JSON.stringify(newProductsStorage));
            this.productsCount();
            this.totalAmount();
        },
        // 計算已加入購物車清單數量
        productsCount() {
            let productsStorage = sessionStorage.getItem('productsCart');
            if (productsStorage) {
                productsCart = JSON.parse(productsStorage);

                let products = [];
                productsCart.forEach((product) => {
                    if (products.length === 0) {
                        product.count = 1;
                        products.push(product);
                    } else {
                        let productFind = products.find((item) => {
                            return item.id === product.id;
                        });
                        if (productFind) {
                            productFind.count = productFind.count + 1;
                        } else {
                            product.count = 1;
                            products.push(product);
                        }
                    }
                });

                this.products = products;
                this.productsCartCount = productsCart.length;
            }
        },
        // 購物車清單數量總數量
        totalAmount() {
            let sum = 0;
            let products = this.products;
            products.forEach((product) => {
                sum = sum + product.count * product.price;
            });
            this.amount = sum;
        },
        createOrder() {
            // 跳出提示訊息
            $('#orderModal').modal({
                backdrop: 'static'
            }).modal('show');
        },
        // 關閉完成訂單　Modal
        orderModalCloseClickHandle(){
            sessionStorage.removeItem('productsCart');
            window.location = 'index.html';
        }
    },
    created() {
        this.productsCount();
        this.totalAmount();
    }
});