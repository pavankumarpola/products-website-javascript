// Realme mobile
var productData = [
    {
      id: "1",
      name: "realme 12 Pro+ 5G (Submarine Blue, 256 GB)  (8 GB RAM)",
      preview:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70&crop=false",
      photos: [
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/g/t/u/-original-imagxhd5xtjuwnqz.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/y/1/-original-imagxhd5fk7se5sy.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/a/b/c/12-pro-5g-rmx3840-realme-original-imagxgnk9zzrs9y6.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/5/i/i/12-pro-5g-rmx3840-realme-original-imagxgnkdggzzd9y.jpeg?q=70&crop=false",
        "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/x/o/i/-original-imagxhd5zvfrnem3.jpeg?q=70&crop=false"
      ],
      description:
        "In a world where innovation reigns supreme, the realme 12 Pro+ 5G stands tall as a beacon of superior technology and design",
      size: [1, 1, 0, 1, 0],
      isAccessory: false,
      brand: "Xiaomi",
      price: 31999
    }
  ];
  
  var dynamicProduct = document.querySelector(".product_container");
  
  productData.map((item) => {
    dynamicProduct.innerHTML += `
      <div class="img_full">
      <img class ="main_img" src=${item.preview} alt="">
    </div>
    <div class="product_desc">
      <h2 class="title">${item.name}</h2>
      <h3 class="subtitle">${item.brand}</h3>
      <h3 class="price">Price Rs : <strong>${item.price}</strong></h3>
      <h4 class="subtitle">Description</h4>
      <p class="description">
       ${item.description}
      </p>
      <h4 class="subtitle">Product Preview</h4>
      <div class="product_preview">
         <img  class="small_img active"  src="${item.photos[0]}" alt="">
         <img  class="small_img" src="${item.photos[1]}" alt="">
         <img class="small_img" src="${item.photos[2]}" alt="">
         <img class="small_img" src="${item.photos[3]}" alt="">
         <img class="small_img" src="${item.photos[4]}" alt="">
      </div>
      <button class="add_to_cart" onclick="pavan()">Add to Cart</button>
    </div>
    `;
  });
  function pavan(){
    document.location.href = "addtocart.html"
  }

  
  var smallImg = document.querySelectorAll(".small_img");
  
  smallImg.forEach((small) =>
    small.addEventListener("click", function (e) {
      var fullImg = document.querySelector(".main_img");
      var newImg = document.querySelectorAll(".small_img");
      fullImg.src = e.target.src;
      for (var i = 0; i < newImg.length; i++) {
        newImg[i].classList.remove("active");
      }
      e.target.classList.add("active");
    })
  );


  

  







