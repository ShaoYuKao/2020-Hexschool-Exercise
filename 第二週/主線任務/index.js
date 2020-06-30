let productList = [];
let breadcrumbStatus = 'productList';

// Get the modal
let modal = document.getElementById("myModal");

let productItem = document.getElementById("productItem");
let gotoProductList = document.getElementById("gotoProductList");
let productDetail = document.getElementById("productDetail");

let obj = {
    data: {
        uuid: '8dfebeff-1ee6-4014-8df4-02b6656f80e4',
        products: [],
    },
    getData() {
        let vm = this;
        let url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

        modal.style.display = "block";

        axios.get(url)
            .then(function (response) {
                vm.data.products = response.data.data;
                vm.render();
            })
    },
    render: function () {
        let app = document.getElementById('app');
        let products = this.data.products;
        let str = '';
        products.forEach(function (item) {
            str += `
            <div class="card">
                <img src="${ item.imageUrl[0]}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">
                        <a href="javascript:void(0)" class='product' data-id=${item.id}>${ item.title}</a>                        
                    </h5>
                    <p class="card-text">${ item.content}</p>
                </div>
            </div>`;
        });
        app.innerHTML = str;
        this.productBind();
        modal.style.display = "none";
    },
    productBind(){
        productList = document.querySelectorAll('.product');
        if(productList.length > 0){
            productList.forEach((product) => {
                product.addEventListener('click', (e) => this.getProductDetail(e));
            });
        }
    },
    getProductDetail(e){
        console.log("getProductDetail e", e);
        let vm = this;
        let productId = e.target.dataset.id;
        let url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/product/${productId}`;

        if(productId){
            // TODO:
        }

        modal.style.display = "block";

        axios.get(url)
            .then((res) => {
                console.log(res);
                if(res.status === 200){
                    vm.productDetailRender(res.data.data);
                } else {
                    // TODO:
                }
            }).catch(() => {

            });

    },
    productDetailRender(detailData){
        console.log(detailData);

        let productImages = '';
        
        let productTitle = document.getElementById("productDetailTitle");
        let productCategory = document.getElementById("productDetailCategory");
        let productContent = document.getElementById("productDetailContent");
        let productDescription = document.getElementById("productDetailDescription");
        let productOriginPrice = document.getElementById("productDetailOriginPrice");
        let productPrice = document.getElementById("productDetailPrice");
        let productImage = document.getElementById("productDetailImage");

        productItem.style.display = 'none';

        document.title = `${detailData.title}產品`;

        // 麵包屑 (Breadcrumb)
        gotoProductList.classList.add("active");
        gotoProductList.innerHTML = `<a href="javascript:void(0);">產品列表</a>`;

        // 商品名稱
        productTitle.innerText = detailData.title;

        // 商品分類
        productCategory.innerHTML = `<span class="badge badge-primary">${detailData.category}</span>`;
        
        // 商品敘述
        productContent.innerText = detailData.content;

        // 商品說明
        productDescription.innerText = detailData.description;

        // 商品原價
        productOriginPrice.innerText = detailData.origin_price;

        // 商品售價
        productPrice.innerText = detailData.price;

        if(detailData.imageUrl.length > 0){
            detailData.imageUrl.forEach((imageUrlItem, index) => {
                productImages += `<img src=${imageUrlItem} alt="${detailData.title}${index}" class="img-fluid m-1" width="360" height="360"></img>`;
            });
            
        }
        productImage.innerHTML = productImages;
        breadcrumbStatus = 'productDetail';

        productDetail.style.display = 'block';
        modal.style.display = "none";
    },
}

obj.getData();

gotoProductList.addEventListener("click", function(){

    if(breadcrumbStatus === 'productList'){
        return;
    }
    
    productDetail.style.display = "none";
    productItem.style.display = 'block';
    
    // 麵包屑 (Breadcrumb)
    gotoProductList.classList.remove("active");
    gotoProductList.innerHTML = `產品列表`;
    breadcrumbStatus = 'productList';
    
    obj.getData();
});

