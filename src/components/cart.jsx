import '../css/cart.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const Cart = ()=>{
    const [cartdata, setcartdata]= useState('');
	const userid = localStorage.getItem("id")

	const getallcartData = ()=>{
        axios.get(`http://localhost:8080/cart/cartlist/${userid}`).then((response)=>{
            setcartdata(response.data.message)
        })
    }

	const cartDelete = (data)=>{
		axios.delete(`http://localhost:8080/cart/deletecart/${data}`).then((response)=>{
			getallcartData();
        })
	}

	useEffect(()=>{
        getallcartData();
    })

    return(
        <>  
  <div class="wrapper">
		<h2>Cart</h2>
		<div class="project">
			<div class="shop">
            { cartdata=="" && <><div style={{height:"440px", width:"690px",textAlign:"center", border:"3px solid rgb(14, 37, 86)", borderRadius:"10px", marginBottom:"20px"}}><h2>Your Cart is Empty</h2></div></>}
			{ cartdata && cartdata.map((data)=>(
				<div class="box">
					<img src={data.imageurl}/>
					<div class="content1">
						<h3>{data.productname}</h3>
						<h4>Price: {data.price}</h4>
						<p class="unit">Quantity: <input name="" value={data.quantity}/></p>
						<p class="btn-area" onClick={()=>cartDelete(data._id)}><i aria-hidden="true" class="fa fa-trash"></i> <span class="btn2">Remove</span></p>
					</div>
				</div>
				))}
			</div>
			<div class="right-bar">
				<p><span>Subtotal</span> <span>$120</span></p>
				<hr/>
				<p><span>Tax (5%)</span> <span>$6</span></p>
				<hr/>
				<p><span>Shipping</span> <span>$15</span></p>
				<hr/>
				<p><span>Total</span> <span>$141</span></p><a href="#"><i class="fa fa-shopping-cart"></i>Checkout</a>
			</div>
		</div>
	</div>
        </>
    )
}

export default Cart