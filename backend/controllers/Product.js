//import functions from Product model
import {
  getProducts,
  getProductById,
  insertProduct,
} from '../models/ProductModel.js';

// get all Products
export const showProduct = (req, res) => {
  getProducts((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.json(result);
    }
  });
};

//get single product
export const showProductById = (req, res) => {
  getProductById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//create new product
export const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};