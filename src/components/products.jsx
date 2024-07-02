import '../css/products.css';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Products = ()=>{
    const params = useParams();
    const navigate = useNavigate();
    const [productdata, setproductdata] = useState('');

    const userid = localStorage.getItem('id');
    const getallproductData = ()=>{
        axios.get(`https://e-comwebsite-backend.vercel.app/products/findproducts/${params.category}`).then((response)=>{
            setproductdata(response.data.message)
        })
    }

    const productDetails =(a)=>{
        localStorage.setItem('productid', a);
        navigate('/productdetails');
    }
    // if(location.pathname===`/products/${params.category}`){
    //     path
    // }

    const cartAdd=(product1)=>{

        let cartitem={userid:userid,
            productname:product1.productname,
            description:product1.description,
            price:product1.price,
            quantity:product1.quantity,
            rating:product1.rating,
            imageurl:product1.imageurl,
            category:product1.category}
            alert("item added to cart");
        axios.post('http://localhost:8080/cart/addcart',cartitem).then((response)=>{
        })
    }

    const wishAdd=(product1)=>{

        let wishitem={userid:userid,
            productname:product1.productname,
            description:product1.description,
            price:product1.price,
            quantity:product1.quantity,
            rating:product1.rating,
            imageurl:product1.imageurl,
            category:product1.category}
            alert("item added to wishlist");
        axios.post('http://localhost:8080/wishlist/addwish',wishitem).then((response)=>{
        })
    }


    useEffect(()=>{
        getallproductData();
    })
    // const handleDelete = (userId)=>{
    //     axios.delete(`http://localhost:8080/users/deleteuser/${userId})`).then((response)=>{
    //         console.log(response)
    //         getalluserData();
    //     })
    // }
   
    return(
        <>
        <div id="content">
        <div id="menu">
            <nav style={{lineHeight:"52px", paddingTop:"42px"}}>
                <ul class="list1"><li class="a2">Category</li>
                <ul class="list1"><li class="options"><input type="radio" name="category"/> <span>Clothing</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Watches</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Shoes</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Sports</span></li></ul>
                <li class="a2">Brand</li>
                <ul class="list1"><li class="options"><input type="radio" name="category"/> <span>Levi's</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>XYXX</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Van Heusen</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>U.S. POLO ASSN.</span></li></ul>
                <li class="a2">Price</li>
                <ul class="list1"><li class="options"><input type="radio" name="category"/> <span>₹200 - ₹500</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>500 - ₹750</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>750 - ₹1,000</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Over ₹1,000</span></li></ul>
                <li class="a2">Size</li>
                <ul class="list1"><li class="options"><input type="radio" name="category"/> <span>Small</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Medium</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>Large</span></li>
                                  <li class="options"><input type="radio" name="category"/> <span>XLarge</span></li></ul></ul>
             </nav>
        </div>
        <div id="contentarea">
                { productdata && productdata.map((product)=>(
                    <>
                    <div class="card2">
                    <img onClick={()=>{productDetails(product._id)}} class="img1" src={product.imageurl} alt=""/>
                    <h3>{product.productname}</h3>
                    <h4 class="green">Rs {product.price}</h4>
                    <h4>{product.rating} <img class="star_img" src="https://pngimg.com/uploads/star/star_PNG41474.png" alt=""/></h4>
                    <div style={{display:"flex", justifyContent:"space-between"}}><button class="button1" onClick={()=>{cartAdd(product)}}>Add to cart</button>
                    <a onClick={()=>{wishAdd(product)}}><img class='wishimage' src="https://clipart-library.com/images_k/heart-symbol-transparent/heart-symbol-transparent-21.png" alt="" /></a></div>
                    </div></>
                ))}
        </div>       
                </div>
            
        </>
    )
}
export default Products