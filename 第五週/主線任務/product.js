Vue.component('loading-component', httpVueLoader('./vue/Frontend/components/LoadingComponent.vue'));
Vue.component('header-component', httpVueLoader('./vue/Frontend/components/HeaderComponent.vue'));

new Vue({
    el: '#app',
    data: {
        isLoading: false,
        uuid: '8dfebeff-1ee6-4014-8df4-02b6656f80e4',
        product: {},                                   // 商品細節
        productsCartCount: 0                           // 已加入購物車清單數量
    },
    filters: {
        // 轉換數字成含千分位的文字
        commaFormat(num) {
            if(!num){
                return "0";
            }
            let parts = String(num).split('.');
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return parts.join('.');
        }
    },
    methods: {
        //  取得單一商品細節
        getData() {
            let vm = this;
            let productId = vm.getParameterByName('pid', window.location.href);
            if (!productId) {
                history.go(-1);
            }
            let url = `https://course-ec-api.hexschool.io/api/${this.uuid}/ec/product/${productId}`;

            vm.isLoading = true;

            axios.get(url)
                .then((res) => {
                    if (res.status === 200) {
                        let product = res.data.data;
                        vm.product = product;
                        document.title = product.title;
                    } else {
                        history.go(-1);
                    }
                }).catch((err) => {
                    console.error("取得單一商品細節", err);
                }).finally(() => {
                    vm.isLoading = false;
                });
        },
        // 取得 Url 的 Query String
        getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, '\\$&');
            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, ' '));
        },
        // 加入購物車
        addCart(productId) {
            let productsStorage = sessionStorage.getItem('productsCart');
            let productsCart = [];
            if (productsStorage) {
                productsCart = JSON.parse(productsStorage);
            }
            productsCart.push(this.product);
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
});