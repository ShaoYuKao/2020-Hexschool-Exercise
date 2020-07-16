<template>
  <div
    id="productModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="exampleModalLabel" class="modal-title">
            <span>{{modalTitle}}</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <!-- 輸入圖片網址 -->
              <div v-for="i in 5" :key="i + 'img'" class="form-group">
                <label :for="'img' + i">輸入圖片網址</label>
                <input
                  :id="'img' + i"
                  v-model="tempProduct.imageUrl[i - 1]"
                  type="text"
                  class="form-control"
                  placeholder="請輸入圖片連結"
                />
                <div v-if="tempProduct.imageUrl[i - 1]">
                  <span>圖片預覽</span>
                  <img
                    class="img-fluid"
                    :src="tempProduct.imageUrl[i - 1]"
                    width="300"
                    height="300"
                    alt
                  />
                </div>
              </div>
              <!-- 上傳圖片 -->
              <label for="selectFile" class="col-form-label">或選擇上傳圖片</label>
              <div class="form-group row">
                <div class="col-sm-9">
                  <input
                    type="file"
                    name="selectFile"
                    id="selectFile"
                    class="form-control"
                    accept="image/*"
                    ref="file"
                    @change="selectFile"
                  />
                </div>
                <div class="col-sm-3">
                  <button
                    type="button"
                    class="btn btn-dark"
                    :disabled="imageBase64.length === 0"
                    @click="uploadFile"
                  >上傳</button>
                </div>
              </div>
              <div v-if="imageBase64">
                <span>圖片預覽</span>
                <img class="img-fluid" :src="imageBase64" width="300" height="300" alt />
              </div>
              <!-- 上傳圖片錯誤訊息 -->
              <div
                id="uploadedFileErrorMsg"
                class="alert alert-danger alert-dismissible fade m-3"
                role="alert"
              >
                <p>{{uploadedFileImageErrorMsg}}</p>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  id="title"
                  v-model="tempProduct.title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                  required
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    id="category"
                    v-model="tempProduct.category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    id="unit"
                    v-model="tempProduct.unit"
                    type="unit"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    id="origin_price"
                    v-model="tempProduct.origin_price"
                    type="number"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    id="price"
                    v-model="tempProduct.price"
                    type="number"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>

              <hr />

              <div class="form-group">
                <label for="description">產品說明</label>
                <textarea
                  id="description"
                  v-model="tempProduct.description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品說明"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <label for="content">產品描述</label>
                <textarea
                  id="content"
                  v-model="tempProduct.content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                  required
                ></textarea>
              </div>

              <div class="form-group">
                <div class="form-check">
                  <input
                    id="enabled"
                    v-model="tempProduct.enabled"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label" for="enabled">是否啟用</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-dismiss="modal"
            @click="initData"
          >取消</button>
          <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: ["user-uuid", "user-token", "modal-title", "is-new"],
  data() {
    return {
      maxsize: 2 * 1024 * 1024, // 上傳檔案大小上限 2M
      imageBase64: "",
      uploadedFileImageErrorMsg: "",
      tempProduct: {
        imageUrl: []
      }
    };
  },
  methods: {
    // 取得單一商品細節
    getProduct(id) {
      const api = `https://course-ec-api.hexschool.io/api/${this.userUuid}/admin/ec/product/${id}`;
      axios.get(api).then((res) => {
          $('#productModal').modal('show');
          this.tempProduct = res.data.data;
          this.$emit("loading-show", false);
      }).catch((error) => {
          console.log(error);
          this.$emit("loading-show", false);
      });
    },
    // 選擇圖片
    selectFile(e) {
      this.imageBase64 = "";

      let file = e.target.files[0]; //取得File物件
      let fileSize = e.target.files[0].size;

      if (this.maxsize < fileSize) {
        let errorMsg = "上傳圖片不可超過 2 MB";
        this.uploadFileErrorMsg(errorMsg);
        console.error(errorMsg);
        return;
      }
      let reader = new FileReader(); //建立FileReader 監聽 Load 事件
      reader.onload = e => {
        this.imageBase64 = e.target.result;
      };

      reader.readAsDataURL(file); // 使用 readAsDataURL 將圖片轉成 Base64
    },
    // 上傳檔案
    uploadFile() {
      this.$emit("loading-show", true);

      let uploadedFile = this.$refs.file.files[0];
      let formData = new FormData();
      formData.append("file", uploadedFile);
      let url = `https://course-ec-api.hexschool.io/api/${this.userUuid}/admin/storage`;

      //預設帶入 token
      axios.defaults.headers.common.Authorization = `Bearer ${this.userToken}`;
      axios
        .post(url, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(response => {
          this.$emit("loading-show", false);
          if (response.status === 200) {
            this.tempProduct.imageUrl.push(response.data.data.path);

            // 上傳成功後清除 input file 的值
            this.$refs.file.value = null;
            this.imageBase64 = "";

            this.imageUrlConfirm();
          }
        })
        .catch(error => {
          let errorMsg = "上傳圖片失敗";
          this.uploadFileErrorMsg(errorMsg);
          console.error(error);
          this.$emit("loading-show", false);
        });
    },
    // 圖片網址數量檢查
    imageUrlConfirm() {
      let newImageUrl = [];
      this.tempProduct.imageUrl.forEach(item => {
        if (item) {
          newImageUrl.push(item);
        }
      });
      if (newImageUrl.length > 5) {
        newImageUrl.splice(0, 1);
      }
      this.tempProduct.imageUrl = newImageUrl;
    },
    uploadFileErrorMsg(message) {
      this.uploadedFileImageErrorMsg = message;
      $("#uploadedFileErrorMsg").addClass("show");
    },
    // 上傳新的(或編輯)產品資料
    updateProduct() {
      this.$emit("loading-show", true);

      // 新增商品
      let api = `https://course-ec-api.hexschool.io/api/${this.userUuid}/admin/ec/product`;
      let httpMethod = "post";

      // 當不是新增商品時則切換成編輯商品 API
      if (!this.isNew) {
        api = `https://course-ec-api.hexschool.io/api/${this.userUuid}/admin/ec/product/${this.tempProduct.id}`;
        httpMethod = "patch";
      }

      //預設帶入 token
      axios.defaults.headers.common.Authorization = `Bearer ${this.userToken}`;
      axios[httpMethod](api, this.tempProduct)
        .then(res => {
          this.initData();
          $("#productModal").modal("hide");
          this.$emit("update");
        })
        .catch(error => {
          console.error(error);
          alert(`${modalTitle}失敗`);
        });
    },
    // 初始化 Data
    initData() {
      this.imageBase64 = "";
      this.uploadedFileImageErrorMsg = "";
      this.tempProduct = {
        imageUrl: []
      };
    }
  },
  created() {
  }
};
</script>