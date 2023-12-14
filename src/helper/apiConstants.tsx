export const api = {
  BASE_URL: "https://api.toolscab.ee/",


  // Auth
  signUp: "Customer/SignUp",
  logout: "logout",


  //Catalogue
  catalogue: "Catalogue/CategorySearch",
  categoryProducts:"Catalogue/CategoryProducts",
  catalogueFilterForm:"Catalogue/FilterForm",
  catalogueFilterProducts:"Catalogue/FilterProducts",

  // /Product
  get_product: "Product",
  product_photo: "Product/Photos",
  product_specs: "Product/Specs",
  product_location: "Product/Locations",

  //profile
  get_profile: "Customer/Profile",
  save_profile:'Customer/SaveProfile',

  //AddItemToCart
  addItemToCart:"Rental/AddItemToCart",

  //Customer/PaymentMethods
  getPaymentMethods:"Customer/PaymentMethods",
  savePaymentMethod:"Customer/SavePaymentMethod",
  deletePaymentMethod:"Customer/DeletePaymentMethod",

};

export const POST = "POST";
export const GET = "GET";

