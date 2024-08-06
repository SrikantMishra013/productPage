let h1 = document.querySelectorAll(".title");
let img = document.querySelectorAll(".image");
let desc = document.querySelectorAll(".desc");
let price = document.querySelectorAll(".price");
let dis = document.querySelectorAll(".discount");
let rate = document.querySelectorAll(".rate");
let stock = document.querySelectorAll(".stock");
let delivery = document.querySelectorAll(".ship");

async function fetchData() {
  let data = await fetch("https://dummyjson.com/products");
  let photos = await data.json();
  console.log(photos.products.length);

  for (let i = 0; i < photos.products.length; i++) {
    h1[i].innerText = photos.products[i].title;
    img[i].src = photos.products[i].thumbnail;
    desc[i].innerText = photos.products[i].description;
    price[i].innerText = "$" + photos.products[i].price;
    dis[i].innerText = "Discount - " + photos.products[i].discountPercentage + "%";
    rate[i].innerText = Math.floor(photos.products[i].rating * 10) / 10;
    stock[i].innerText = photos.products[i].stock + " available";
    delivery[i].innerText = photos.products[i].shippingInformation;
    

  }

  console.log(photos);
}
fetchData();
