
const express = require('express')

const productController = require('../Controller/ProductController')

const userController = require('../Controller/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const wishlistController = require('../Controller/wishlistController')
const cartController = require('../Controller/cartController')


const router = new express.Router()


// getallproduct

router.get('/all-products',productController.getAllProductController)

// Register

router.post('/register',userController.register)

// login

router.post('/login',userController.login)

// view Product
router.get('/view-product/:id',productController.getAProductController)

// Addto Wishlist
router.post('/add-to-wishlist',jwtMiddleware,wishlistController.addToWishlistController)

// get Wishlist
router.get('/get-wishlist',jwtMiddleware,wishlistController.getWishlistController)

// remove wishlist item
router.delete('/wishlist-remove/:id',jwtMiddleware,wishlistController.removeProductWishlistController)

// addtocart
router.post('/add-to-cart',jwtMiddleware,cartController.addToCartController)

// get-cart
router.get('/get-cart',jwtMiddleware,cartController.getCartController)

// remove cart-items
router.delete('/remove-cart/:id',jwtMiddleware,cartController.removeCartItemController)

// increment-Quantity
router.get('/cart-increment/:id',jwtMiddleware,cartController.incrementItemController)

// decrement cart
router.get('/cart-decrement/:id', jwtMiddleware, cartController.decrementItemController)

// empty cart
router.delete('/empty-cart', jwtMiddleware, cartController.emptyCartController)

module.exports = router