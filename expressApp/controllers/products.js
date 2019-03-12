const { products, Product } = require('../models5/Product');
//import db from '../models';
const db = require('../models');

const getAllProducts = (req, res) => {
	//res.send(products);
	db.Product.findAll(	)
      .then((products) => {
        res.send(products);
      })
      .catch((e) => {
        console.log(e);
        res.send({ error: 'No products available' });
      });
	// db.Products.findAll()
    // .then(data => res.json(data));
};
const getProductById = (req, res) => {
	// const searchResult = products.find(el => el.id === parseInt(req.params.id));
	// res.send(searchResult);
	db.Product.findById(req.params.id)
      .then((product) => {
        res.json(product);
      })
      .catch((e) => {
        console.log(e);
        res.json({ error: e.name });
      });
};
const getProductReviews = (req, res) => {
	const searchResult = products.find(el => el.id === parseInt(req.params.id));
	res.send(searchResult.reviewers);
};
const addNewProduct = (req, res) => {
	products.push(new Product(3, 'product5', 400, ['New', 'Product', 'Added'] ));
	res.send(products);
};

module.exports = {
	getAllProducts,
	getProductById,
	getProductReviews,
	addNewProduct
};