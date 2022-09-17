<template>
  <div>
    <div class="container" style="padding-top: 10%">
      <div class="row d-flex justify-content-center">
        <div class="col-5 text-left login-form-container">
          <div class="d-flex justify-content-center">
            <label><strong>Add product to the online store</strong></label>
            <br>
          </div>
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Name of the product</label>
              <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="add the product name"
                  v-model='nameProduct'
              />

            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">description</label>
              <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Describe the product"
                  v-model='description'
              />
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Price €</label>
              <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="product Price €"
                  v-model='price'
              />
            </div>

            <div class="form-group">
              <label>Add an img</label>
              <br>
              <input type="file" @change="selectedFile" ref="file"/>
              <br>
              <button class="btn btn-primary btn-block" @click="sendFile">Upload</button>
              <br>
              <p v-if="message">{{message}}</p>
            </div>

            <div class="form-group form-check">
              <label class="form-check-label" for="exampleCheck1"></label>
            </div>
            <button @click="addProduct" class="btn btn-primary btn-block">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../../../services/AuthenticationService';
import axios from 'axios';

export default {
  name: 'AddProduct',

  data() {
    return {
      nameProduct: '',
      description: '',
      price: '',
      selectedField: '',
      file: '',
      message: '',
    };
  },

  methods: {
    selectedFile() {
      this.file = this.$refs.file.files[0];
      this.message = '';
    },

    async addProduct() {
      let fd = new FormData();
      fd.append('selectedField', this.selectedField, this.selectedField.name);
      const response = await AuthenticationService.addProduct({
        nameProduct: this.nameProduct,
        description: this.description,
        price: this.price,
        selectedField: this.selectedField,
      });
      //console.log('fd: ' + fd)
      console.log('The response data is: ' + response.data);
      console.log('nameProduct: ' + this.nameProduct + ' description: ' + this.description + ' price: ' + this.price);
    },
    async sendFile() {
      try {
        const formData = new FormData();
        formData.append('file', this.file,this.selectedField.name); // , this.selectedField.name
        await axios.post('http://localhost:8000/Upload', formData);// it is necessary to add the hole url
        this.message = 'File uploaded successfully';
        this.file = ''; // to reset Upload
        console.log('Upload successful');
      } catch (e) {
        this.message = 'Something went wrong';
        console.log('Something went wrong: ' + e);
      }
    },
  },

};
</script>

<style scoped>
.form-control {
  border-radius: 0%;
  height: 50px;
}

.login-form-container {
  padding: 20px;
  box-shadow: 0px 2px 5px 2px #888888;
}

.btn {
  border-radius: 0%;
  font-weight: bold;
  background: #2c3e50;
  border: #2c3e50;
}

.btn:hover {
  background: #2c3e50;
}

.btn:focus {
  background: #2c3e50;
}
</style>