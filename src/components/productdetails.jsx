import { useState, useEffect } from 'react';
import '../css/productdetails.css'
import axios from 'axios'

const Productdetails =()=>{
  const productid = localStorage.getItem('productid');
  const userid = localStorage.getItem('id');
  const [productdata, setproductdata] = useState('');
  const [IsLoading, setIsLoading] = useState(true);

  const getproductData = ()=>{
    axios.get(`https://e-comwebsite-backend.onrender.com/products/singleproductlist/${productid}`).then((response)=>{
        setproductdata(response.data.message);
        setIsLoading(false);
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
      if(userid){alert("item added to wishlist");}
      else{alert("Please login first")}
  axios.post('https://e-comwebsite-backend.onrender.com/cart/addcart',cartitem).then((response)=>{
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
    if(userid){alert("item added to wishlist");}
    else{alert("Please login first")}
  axios.post('https://e-comwebsite-backend.onrender.com/wishlist/addwish',wishitem).then((response)=>{
  })
}

useEffect(()=>{
  getproductData();
})

    return(
    <>
    {
                    IsLoading===true ?
                    <div style={{height:"800px"}}>
                    <div className="loader">
                    </div></div>
                    : 
      <><div className='content'><div class = "card12">
        <div class = "product-imgs">
          <div class = "img-display">
            <div class = "img-showcase">
              <img class="imgs" src={productdata.imageurl} alt = "product image"/>
            </div>
          </div>
          


        </div>
        <div class = "product-content">
          <h1 style={{fontSize:'30px'}} class = "product-title">{productdata.productname}</h1>
          <div style={{display:'flex', alignItems:'center', gap:'59px'}}><div>
          <a style={{fontSize:'15px'}} href = "#" class = "product-link">visit nike store</a>
          <div style={{fontSize:'15px'}} class = "product-rating">
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star"></i>
            <i class = "fas fa-star-half-alt"></i>
            <span>4.7(21)</span>
          </div></div>
          <div style={{fontSize:'15px', lineHeight:'24px'}} class = "product-price">
            <p class = "last-price">Old Price: <span>$257.00</span></p>
            <p class = "new-price">New Price: <span>$249.00 (5%)</span></p>
          </div></div>

          <div style={{fontSize:'15px'}} class = "product-detail">
            <div><h2>about this item: </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p></div>
            <div style={{width:'490px'}}>
              <p><b>Color:</b> <span>Black</span></p>
              <p><b>Available:</b> <span>in stock</span></p>
              <p><b>Category:</b> <span>Shoes</span></p>
              <p><b>Shipping Area:</b> <span>All over the world</span></p>
              <p><b>Shipping Fee:</b> <span>Free</span></p>
            </div>
          </div>

          <div style={{fontSize:'15px'}} class = "purchase-info">
            <input type = "number" min = "0" value = "1"/>
            <button onClick={()=>{cartAdd()}} type = "button" class = "button12">
              Add to Cart <i class = "fas fa-shopping-cart"></i>
            </button>
            <a onClick={()=>{wishAdd()}}><img class='wishimage1' src="https://clipart-library.com/images_k/heart-symbol-transparent/heart-symbol-transparent-21.png" alt="" /></a>
          </div>

          <div style={{fontSize:'15px'}} class = "social-links">
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
      </div></div></>}
   
    </>
    )
}

export default Productdetails