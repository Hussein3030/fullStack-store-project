// import connection
import db from '../config/database.js';
import res from 'express/lib/response.js';

//get all products
export const getproducts = (result) => {
  db.query('SELECT * FROM users', (err, result) => {
    if (err) {
      console.log('Their is an error: ' + err);
      result(err, null);
    } else {
      result(null, result);
    }
  });
};

// get single product from the database
export const getProductsById = (id, result) => {

  // if you want to get a singe product(data)
  db.query('SELECT * FROM user WHERE user_name = ?', [id], (err, result) => {
    if (err) {
      console.log('Their is an error: ' + err);
      result(err, null);
    } else {
      result(null, result[0]);
    }
  });
};

//insert product to databased (creating a new product and insert the product to databased)
export const insertProduct = (data, result) => {
  db.query("INSERT INTO product SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

/*
// Update Product to Database, if need it
export const updateProductById = (data, id, result) => {
  db.query(
      "UPDATE product SET product_name = ?, product_price = ? WHERE product_id = ?",
      [data.product_name, data.product_price, id],
      (err, results) => {
        if (err) {
          console.log(err);
          result(err, null);
        } else {
          result(null, results);
        }
      }
  );
};

// Delete Product to Database, if need it
export const deleteProductById = (id, result) => {
  db.query("DELETE FROM product WHERE product_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
 */