var productNameInput = document.getElementById("ProductName"); //kol el input
var productPriceInput = document.getElementById("ProductPrice"); //kol el input
var productCategoryInput = document.getElementById("ProductCategory"); //kol el input
var productDescriptionInput = document.getElementById("ProductDescription"); //kol el input
var productImageInput = document.getElementById("ProductImage"); //kol el input
var searchInput=document.getElementById("searchInput")
var btnAdd = document.getElementById("btnadd");
var btnUpdate = document.getElementById("btnupdate");

var currentIndex = 0;

var productList = [];

if (localStorage.getItem("continer") !== null) {
  productList = JSON.parse(localStorage.getItem("continer"));
  display();
}

function addProduct() {
    if(dataValidName() && dataValidPrice()){
      var product = {
    name: productNameInput.value.trim(),
    price: productPriceInput.value,
    category: productCategoryInput.value.trim(),
    description: productDescriptionInput.value.trim(),
    imag: `images/${productImageInput.files[0]?.name}`,
  };

  productList.push(product);
  localStorage.setItem("continer", JSON.stringify(productList));
  display();
  clearInput();
    }
    
}



function display() {
  box = "";
  for (var i = 0; i < productList.length; i++) {
    box+=creatBox(i)
  }

  document.getElementById("product").innerHTML = box;
}


function  creatBox (i) {
  return  `
  <div class="col-md-3">
                <div class="card mb-4">
      <img src="${productList[i].imag}" class="card-img-top" alt="${productList[i].imag}" />
      <div class="card-body text-center">
        <span>index:${i}</span>
        <h3 class="card-title">productName:${productList[i].name}</h3>
        <p class="card-text">productPrice:${productList[i].price}</p>
        <p class="card-text">ProductCategory:${productList[i].category}</p>
        <p class="card-text">ProductDescription:${productList[i].description}</p>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-sm btn-outline-danger"onclick="deletProcduct(${i})">Delet</button>
        <button class="btn btn-outline-warning btn-sm"  onclick="upData(${i})">UpData</button>
      </div>
    </div>
            </div>
    `;
  
}

function clearInput() {
  (productNameInput.value = null),
    (productPriceInput.value = null),
    (productCategoryInput.value = null),
    (productDescriptionInput.value = null),
    (productImageInput.value = null);


    productPriceInput.classList.remove("is-valid")
    productNameInput.classList.remove("is-valid")
    productCategoryInput.classList.remove("is-valid")
    productDescriptionInput.classList.remove("is-valid")
    productImageInput.classList.remove("is-valid")

}

function deletProcduct(index) {
  productList.splice(index, 1);
  localStorage.setItem("continer", JSON.stringify(productList));
  display();
}

function upData(index) {
  currentIndex = index;
  productNameInput.value = productList[index].name;
  productPriceInput.value = productList[index].price;
  productCategoryInput.value = productList[index].category;
  productDescriptionInput.value = productList[index].description;
  btnAdd.classList.add("d-none");
  btnUpdate.classList.remove("d-none");
}

function updateProduct() {
  var product = {
    name: productNameInput.value.trim(),
    price: productPriceInput.value,
    category: productCategoryInput.value.trim(),
    description: productDescriptionInput.value.trim(),
    img: `images/${productImageInput.files[0]?.name}`,
  };

  productList.splice(currentIndex, 1, product);
  localStorage.setItem("continer", JSON.stringify(productList));

  btnAdd.classList.remove("d-none")
  btnUpdate.classList.add("d-none")
  display();
  clearInput();
}


function searchData() {
  
  var term = searchInput.value.toLowerCase()

  var box = "";
  for (var i = 0; i < productList.length; i++) {
    if(productList[i].name.toLowerCase().includes(term)){
      box+=creatBox(i)
    
  }

  document.getElementById("product").innerHTML = box;
}
  
}


function dataValidName(){
  var text=productNameInput.value;
  var regax=/^[a-zA-Z\s'-]+$/;

  var msName=document.getElementById("msName")

  if(regax.test(text)){
    productNameInput.classList.add("is-valid");
  productNameInput.classList.remove("is-invalid");
  msName.classList.add("d-none")
  return true
  }
  else{
    productNameInput.classList.add("is-invalid");
  productNameInput.classList.remove("is-valid");
  msName.classList.remove("d-none")
  return false
  }
}

function dataValidPrice() {
  var price=productPriceInput.value;
 let regax = /^\d{1,4}(\.\d{1,2})?$/;

 msPrice=document.getElementById("msPrice")

  if(regax.test(price)){
    productPriceInput.classList.add("is-valid")
    productPriceInput.classList.remove("is-invalid")
    msPrice.classList.add("d-none")


    return true
  }

  else{
    productPriceInput.classList.remove("is-valid")
    productPriceInput.classList.add("is-invalid")
    msPrice.classList.remove("d-none")

    return false
  }
}


function dataValidCategory () {

  let smCategory=document.getElementById("smCategory")

  let category=productCategoryInput.value;
  let regax = /^(tv|mobile|screen|electronic)$/i;

  if(regax.test(category)){
    productCategoryInput.classList.add("is-valid")
    productCategoryInput.classList.remove("is-invalid")
    smCategory.classList.add("d-none")

}
  else{
    productCategoryInput.classList.add("is-invalid")
    productCategoryInput.classList.remove("is-valid")
    smCategory.classList.remove("d-none")
  }
}



function dataValidescription(){
  var description=productDescriptionInput.value;
  const regex = /^[\u0621-\u064A\u0660-\u0669a-zA-Z0-9\s.,!?-]{10,200}$/;

  if(regex.test(description)){
    productDescriptionInput.classList.add("is-valid")
    productDescriptionInput.classList.remove("is-invalid")
  }

  else{
    productDescriptionInput.classList.remove("is-valid")
    productDescriptionInput.classList.add("is-invalid")

  }
}


function printSum(){
  let sum=5

}