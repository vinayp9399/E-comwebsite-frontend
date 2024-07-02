import { useState, useEffect } from 'react';
import '../css/productdetails.css'
import axios from 'axios'

const Productdetails =()=>{
  const productid = localStorage.getItem('productid');
  const userid = localStorage.getItem('id');
  const [productdata, setproductdata] = useState('');

  const getproductData = ()=>{
    axios.get(`https://e-comwebsite-backend.vercel.app/products/singleproductlist/${productid}`).then((response)=>{
        setproductdata(response.data.message);
    })
}

const cartAdd=()=>{

  let cartitem={userid:userid,
      productname:productdata.productname,
      description:productdata.description,
      price:productdata.price,
      quantity:productdata.quantity,
      rating:productdata.rating,
      imageurl:productdata.imageurl,
      category:productdata.category}
      alert("item added to cart");
  axios.post('https://e-comwebsite-backend.vercel.app/cart/addcart',cartitem).then((response)=>{
  })
}

const wishAdd=()=>{

  let wishitem={userid:userid,
    productname:productdata.productname,
    description:productdata.description,
    price:productdata.price,
    quantity:productdata.quantity,
    rating:productdata.rating,
    imageurl:productdata.imageurl,
    category:productdata.category}
      alert("item added to wishlist");
  axios.post('https://e-comwebsite-backend.vercel.app/wishlist/addwish',wishitem).then((response)=>{
  })
}

useEffect(()=>{
  getproductData();
})

    return(
    <>
    
      <div class = "card12">
        {/* <!-- card left --> */}
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img class="imgs" src={productdata.imageurl} alt = "product image"/>
            </div>
          </div>
          <div class = "img-select">
            <div class = "img-item">
              <a href = "#" data-id = "1">
                <img class="imgs" src = "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "2">
                <img class="imgs" src = "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "3">
                <img class="imgs" src = "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" alt = "shoe image"/>
              </a>
            </div>
            <div class = "img-item">
              <a href = "#" data-id = "4">
                <img class="imgs" src = "https://media.extra.com/s/aurora/100322230_800/Apple-iPhone-14-Pro-Max%2C-5G%2C-128GB%2C-Space-Black?locale=en-GB,en-*,*" alt = "shoe image"/>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- card right --> */}
        <div class = "product-content">
          <h1 class = "product-title">{productdata.productname}</h1>
          <a href = "#" class = "product-link">visit nike store</a>
          <div class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div>

          <div class = "product-price">
            <p class = "last-price">Old Price: <span>$257.00</span></p>
            <p class = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div>

          <div class = "product-detail">
            <h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
            <ul>
              <li>Color: <span>Black</span></li>
              <li>Available: <span>in stock</span></li>
              <li>Category: <span>Shoes</span></li>
              <li>Shipping Area: <span>All over the world</span></li>
              <li>Shipping Fee: <span>Free</span></li>
            </ul>
          </div>

          <div class = "purchase-info">
            <input type = "number" min = "0" value = "1"/>
            <button onClick={()=>{cartAdd()}} type = "button" class = "button12">
              Add to Cart <i class = "fas fa-shopping-cart"></i>
            </button>
            <a onClick={()=>{wishAdd()}}><img class='wishimage1' src="https://clipart-library.com/images_k/heart-symbol-transparent/heart-symbol-transparent-21.png" alt="" /></a>
          </div>

          <div class = "social-links">
            <p>Share At: </p>
            <a href = "#">
              <i class = "fab fa-facebook-f"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-twitter"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-instagram"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-whatsapp"></i>
            </a>
            <a href = "#">
              <i class = "fab fa-pinterest"></i>
            </a>
          </div>
        </div>
      </div>
   
    </>
    )
}

export default Productdetails