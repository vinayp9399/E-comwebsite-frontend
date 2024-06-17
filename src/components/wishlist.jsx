import '../css/wishlist.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Wishlist =()=>{
    
	const [wishdata, setwishdata]= useState('');
	const userid = localStorage.getItem("id")

	const getallwishData = ()=>{
        axios.get(`http://localhost:8080/wishlist/wishlist/${userid}`).then((response)=>{
            setwishdata(response.data.message)
        })
    }

	const wishDelete = (data)=>{
		axios.delete(`http://localhost:8080/wishlist/deletewish/${data}`).then((response)=>{
			getallwishData();
        })
	}

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

	useEffect(()=>{
        getallwishData();
    })

    return(
        <>
    { wishdata=="" && <><div style={{height:"440px", width:"690px",textAlign:"center", border:"3px solid rgb(14, 37, 86)", borderRadius:"10px", margin: "20px auto" }}><h2>Your wishlist is Empty</h2></div></>}
    { wishdata && wishdata.map((data)=>(
        <div class="box1">
					<img src={data.imageurl}/>
					<div class="content1">
						<h3>{data.productname}</h3>
						<h4>Price: {data.price}</h4>
						<p class="unit">Quantity: <input name="" value={data.quantity}/></p>
                        <p onClick={()=>{cartAdd(data)}} class="btn-area1"><span class="btn2">Add to Cart</span></p>
						<p onClick={()=>wishDelete(data._id)} class="btn-area"><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
					</div>
                    </div>

        ))}
        </>
    )
}

export default Wishlist