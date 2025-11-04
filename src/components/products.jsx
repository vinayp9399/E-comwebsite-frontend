import '../css/products.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector} from 'react-redux'

const Products = ()=>{
    const params = useParams();
    const search = useSelector(state=>state.search)

    const navigate = useNavigate();
    const [productdata, setproductdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const [category, setcategory] = useState('');

    const userid = localStorage.getItem('id');
    const getallproductData = ()=>{
        if(search!='' && !params.category){
            console.log(search.search);
            axios.get(`https://e-comwebsite-backend.onrender.com/products/searchproducts/${search.search}`).then((response)=>{
            setIsLoading(false);
            setcategory(params.category);
            setproductdata(response.data.message)
        }) 
        }
        else{
        axios.get(`https://e-comwebsite-backend.onrender.com/products/findproducts/${params.category}`).then((response)=>{
            setIsLoading(false);
            setcategory(params.category);
            setproductdata(response.data.message)
        })
    }
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
            if(userid){alert("item added to cart");}
            else{alert("Please login first")}
        axios.post('https://e-comwebsite-backend.onrender.com/cart/addcart',cartitem).then((response)=>{
            
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
            if(userid){alert("item added to wishlist");}
            else{alert("Please login first")}
        axios.post('https://e-comwebsite-backend.onrender.com/wishlist/addwish',wishitem).then((response)=>{
           
        })
    }


    useEffect(()=>{
        if(category != params.category){
            setIsLoading(true);
            getallproductData();
        }
        else{
            setIsLoading(false);
        }  
    })
    // const handleDelete = (userId)=>{
    //     axios.delete(`https://e-comwebsite-backend.onrender.com/users/deleteuser/${userId})`).then((response)=>{
    //         console.log(response)
    //         getalluserData();
    //     })
    // }
   
    return(
        <>
        <div id="content">
        <div id="menu">
            <nav style={{lineHeight:"52px", paddingTop:"10px", fontSize:'15px'}}>
                <ul style={{lineHeight:"46px"}} class="list1"><li class="a2">Category</li>
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
        {
                    IsLoading===true ?
                    <div className="loader">
                    </div>
                    : 
                <><div className="grid2">{ productdata && productdata.map((product)=>(
                    <>
                    <div class="card2">
                    <img onClick={()=>{productDetails(product._id)}} class="img1" src={product.imageurl} alt=""/>
                    <h3>{product.productname}</h3>
                    <h4 class="green">Rs {product.price}</h4>
                    <div style={{display:"flex",justifyContent:'space-between',alignItems:'center'}}><h4>{product.rating} <img class="star_img" src="https://pngimg.com/uploads/star/star_PNG41474.png" alt=""/></h4>
                    <div style={{display:"flex", justifyContent:"space-between", gap:'10px'}}><i onClick={()=>{cartAdd(product)}} style={{color:"rgb(13, 17, 94)"}} class="fa fa-shopping-cart" aria-hidden="true"></i>
                    <i onClick={()=>{wishAdd(product)}} style={{color:"rgba(241, 22, 22, 1)"}} class="fa fa-heart" aria-hidden="true"></i></div></div>
                    </div></>
                ))}</div></>
            }
        </div>       
                </div>
            
        </>
    )
}
export default Products