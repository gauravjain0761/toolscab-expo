export const api = {
  BASE_URL: "https://api.toolscab.ee/",


  // Auth
  signUp: "Customer/SignUp",
  login:"Customer/Login",
  logout: "logout",


  //Catalogue
  catalogue: "Catalogue/CategorySearch",
  categoryProducts:"Catalogue/CategoryProducts",
  catalogueFilterForm:"Catalogue/FilterForm",
  catalogueFilterProducts:"Catalogue/FilterProducts",

  // /Product
  productSearch:"Product/Search",
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

  //Rental/ShoppingCart
  shoppingCart:"Rental/ShoppingCart",
  activeRentals:'Rental/ActiveRentals',
  startRental:'Rental/StartRental',
  finishRental:'Rental/FinishRental',
  removeItemFromCart:"Rental/RemoveItemFromCart",
  terminateInvalidStart:"Rental/TerminateInvalidStart",
  rateService:"Rental/RateService",
  rentalOpenLocker:'Rental/OpenLocker',
  rentalQueryIsLocked:"Rental/QueryIsLocked",


  //html
  contentHtml:'Content/Html',

};

export const POST = "POST";
export const GET = "GET";

