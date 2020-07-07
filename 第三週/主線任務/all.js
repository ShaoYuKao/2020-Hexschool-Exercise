new Vue({
    el: '#app',
    data: {
        products: [
            {
                id: 1586934917210,
                unit: '台',
                category: '掌上主機',
                title: 'Switch',
                origin_price: 20000,
                price: 9980,
                description: '想玩就玩',
                content: '動森太好玩惹',
                is_enabled: 1,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
            {
                id: 1196934917910,
                unit: '台',
                category: '主機',
                title: 'PS5 Wifi',
                origin_price: 29999,
                description: '次世代超強規格',
                content: '我也想要換一台 PS5 Wifi',
                price: 9487,
                is_enabled: 0,
                imageUrl: 'https://images.unsplash.com/photo-1592107761705-30a1bbc641e7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
            },
        ],
        tempProduct: {},
    },
    methods: {
        openProductModal(status, item) {
            switch (status) {
                case 'add':
                    let id = new Date().getTime();
                    this.tempProduct = {};
                    this.tempProduct.id = id;
                    this.tempProduct.status = 'add';
                    $('#productModal').modal({
                        backdrop: 'static'
                    }).modal('show');
                    break;
                case 'edit':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    this.tempProduct.status = 'edit';
                    $('#productModal').modal({
                        backdrop: 'static'
                    }).modal('show');
                    break;
                case 'delete':
                    this.tempProduct = JSON.parse(JSON.stringify(item));
                    $('#delProductModal').modal({
                        backdrop: 'static'
                    }).modal('show');
                    break;
                default:
                    break;
            }
        },
        saveProduct() {
            let productId = this.tempProduct.id;
            if (!productId) {
                return;
            }
            switch (this.tempProduct.status) {
                case 'add':
                    this.addProduct();
                    break;
                case 'edit':
                    this.modifyProduct(productId);
                    break;

                default:
                    break;
            }
        },
        addProduct() {
            this.products.push(this.tempProduct);
            this.productModalHide();
        },
        modifyProduct(productId) {
            if (!productId) {
                return;
            }
            let newProducts = this.products.map((item) => {
                if (item.id === productId) {
                    item = this.tempProduct;
                }
                return item;
            });
            this.products = newProducts;
            this.productModalHide();
        },
        delProduct() {
            let newProducts = [];
            this.products.forEach((item) => {
                if (item.id !== this.tempProduct.id) {
                    newProducts.push(item);
                }
            });
            this.products = newProducts;
            this.delProductModalHide();
        },
        productModalHide() {
            this.tempProduct = {};
            $('#productModal').modal('hide');
        },
        delProductModalHide() {
            this.tempProduct = {};
            $('#delProductModal').modal('hide');
        }
    },
    created() { }
});