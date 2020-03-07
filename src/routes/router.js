const signupUser = require('./users/signup-users');
const products = require('./products/get-products');
const mainRoute = require('./main/main');

const router = {
  '/products': products,
  '/signup': signupUser,
  default: mainRoute,
};

module.exports = router;
