import '../css/products.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { useSelector} from 'react-redux';

const Products = ()=>{
    const params = useParams();
    const search = useSelector(state=>state.search);
    const location = useLocation();

    const [selectedcategory, setSelectedcategory] = useState("");
    const [selectedbrand, setSelectedbrand] = useState("");
    const [selectedprice, setSelectedprice] = useState("");


    const navigate = useNavigate();
    const [productdata, setproductdata] = useState('');
    const [IsLoading, setIsLoading] = useState(true);
    const [category, setcategory] = useState('');

    const userid = localStorage.getItem('id');
    const getallproductData = ()=>{
        if(search!='' && !params.category){
            console.log(search.search);
            axios.get(`http://localhost:8080/products/searchproducts/${search.search}`).then((response)=>{
            setIsLoading(false);
            setcategory(params.category);
            setproductdata(response.data.message)
        }) 
        }
        // else if(selectedcategory!='' || selectedbrand!='' || selectedprice!=''){
        //     const params1 = {category:params.category,secondarycategory:selectedcategory,brand:selectedbrand,price:selectedprice}
        //     console.log(params1);
        //     axios.get(`http://localhost:8080/products/sidesearchproducts`,{params:params1}).then((response)=>{
        //     setIsLoading(false);
        //     setcategory(params.category);
        //     setproductdata(response.data.message)
        // }) 
        // }
        else{
        // axios.get(`http://localhost:8080/products/findproducts/${params.category}`).then((response)=>{
        //     setIsLoading(false);
        //     setcategory(params.category);
        //     setproductdata(response.data.message)
        // })

        const params1 = {category:params.category,secondarycategory:selectedcategory,brand:selectedbrand,price:selectedprice}
            console.log(params1);
            axios.get(`http://localhost:8080/products/sidesearchproducts`,{params:params1}).then((response)=>{
            console.log(response)
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
            if(userid){alert("item added to wishlist");}
            else{alert("Please login first")}
        axios.post('http://localhost:8080/wishlist/addwish',wishitem).then((response)=>{
           
        })
    }


   useEffect(() => {
    setIsLoading(true);
    getallproductData();
}, [params.category, selectedcategory, selectedbrand, selectedprice, search]);
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
            <nav style={{lineHeight:"52px", paddingTop:"10px", fontSize:'15px'}}>
                
                <ul style={{lineHeight:"46px"}} class="list1"><li class="a2">Category</li>
                <ul class="list1">
                  { (params.category == 'men' || params.category =='women') && <>
                    <li class="options"><input value="clothing" checked={selectedcategory === "clothing"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Clothing</span></li>
                    <li class="options"><input value="shoes" checked={selectedcategory === "shoes"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Shoes</span></li>
                    <li class="options"><input value="sports" checked={selectedcategory === "sports"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Sports</span></li></>}
                  
                  { params.category == 'electronics' && <>
                    <li class="options"><input value="Watch" checked={selectedcategory === "Watch"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Watches</span></li>
                    <li class="options"><input value="earphones" checked={selectedcategory === "earphones"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Earphones</span></li>
                    <li class="options"><input value="headphones" checked={selectedcategory === "headphones"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Headphones</span></li>
                    <li class="options"><input value="phone" checked={selectedcategory === "phone"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>Phone</span></li></>}

                    <li class="options"><input value="none" checked={selectedcategory === "none"} onChange={(e)=>{setSelectedcategory(e.target.value)}} type="radio" name="category"/> <span>None</span></li></ul>
                <li class="a2">Brand</li>
                <ul class="list1">
                    { (params.category == 'men' || params.category =='women') && <>
                    <li class="options"><input value="Levi's" checked={selectedbrand === "Levi's"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Levi's</span></li>
                    <li class="options"><input value="XYXX" checked={selectedbrand === "XYXX"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>XYXX</span></li>
                    <li class="options"><input value="Van Heusen" checked={selectedbrand === "Van Heusen"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Van Heusen</span></li>
                    <li class="options"><input value="U.S. POLO ASSN." checked={selectedbrand === "U.S. POLO ASSN."} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>U.S. POLO ASSN.</span></li></>}

                    { params.category == 'electronics' && <>
                    <li class="options"><input value="apple" checked={selectedbrand === "apple"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Apple</span></li>
                    <li class="options"><input value="samsung" checked={selectedbrand === "samsung"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Samsung</span></li>
                    <li class="options"><input value="boat" checked={selectedbrand === "boat"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Boat</span></li>
                    <li class="options"><input value="sony" checked={selectedbrand === "sony"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>Sony</span></li></>}


                    <li class="options"><input value="none" checked={selectedbrand === "none"} onChange={(e)=>{setSelectedbrand(e.target.value)}} type="radio" name="brand"/> <span>None</span></li>
                    </ul>
                <li class="a2">Price</li>
                <ul class="list1">
                    {/* <li class="options"><input value="500" checked={selectedprice === "500"} onChange={(e)=>{setSelectedprice(e.target.value)}} type="radio" name="price"/> <span>less than ₹500</span></li> */}
                    <li class="options"><input value="1000" checked={selectedprice === "1000"} onChange={(e)=>{setSelectedprice(e.target.value)}} type="radio" name="price"/> <span>less than ₹1000</span></li>
                    <li class="options"><input value="2000" checked={selectedprice === "2000"} onChange={(e)=>{setSelectedprice(e.target.value)}} type="radio" name="price"/> <span>less than ₹2000</span></li>
                    <li class="options"><input value="3000" checked={selectedprice === "3000"} onChange={(e)=>{setSelectedprice(e.target.value)}} type="radio" name="price"/> <span>less than ₹3000</span></li>
                    <li class="options"><input value="none" checked={selectedprice === "none"} onChange={(e)=>{setSelectedprice(e.target.value)}} type="radio" name="price"/> <span>None</span></li></ul></ul>
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