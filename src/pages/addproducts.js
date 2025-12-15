import { useState } from "react"
import axios from 'axios'


const Addproduct = ()=>{

    const [name, setname] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [quantity, setquantity] = useState('');
    const [rating, setrating] = useState('');
    const [imageurl, setimageurl] = useState('');
    const [category, setcategory] = useState('');
    const [secondarycategory, setsecondarycategory] = useState('');
    const [brand, setbrand] = useState('');

    const handleSubmit =()=>{
      let productitem={productname:name,
      description:description,
      price:price,
      quantity:quantity,
      rating:rating,
      imageurl:imageurl,
      category:category,
      secondarycategory:secondarycategory,
      brand:brand,}

  axios.post('https://e-commbackend-fast-api.vercel.app/products/addproduct',productitem).then((response)=>{
    alert('item added!')
  })
    }

    return(
        <>
        <form style={{width:'700px',borderRadius:'5px',marginTop:'50px',backgroundColor:'#dbdbfc',padding:'20px',display:'flex',flexDirection:'column',gap:'10px'}}>
            <div style={{display:'flex',gap:'10px'}}><label>Product Name</label>
            <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" />
            <label>Description</label>
            <input value={description} onChange={(e)=>{setdescription(e.target.value)}} type="text" /></div>
            <div style={{display:'flex',gap:'10px'}}><label>Price</label>
            <input value={price} onChange={(e)=>{setprice(e.target.value)}} type="text" />
            <label>Quantity</label>
            <input value={quantity} onChange={(e)=>{setquantity(e.target.value)}} type="text" /></div>
            <div style={{display:'flex',gap:'10px'}}><label>Rating</label>
            <input value={rating} onChange={(e)=>{setrating(e.target.value)}} type="text" />
            <label>Image url</label>
            <input value={imageurl} onChange={(e)=>{setimageurl(e.target.value)}} type="text" /></div>
            <div style={{display:'flex',gap:'10px'}}><label>Category</label>
            <input value={category} onChange={(e)=>{setcategory(e.target.value)}} type="text" />
            <label>Secondary Category</label>
            <input value={secondarycategory} onChange={(e)=>{setsecondarycategory(e.target.value)}} type="text" /></div>
            <div style={{display:'flex',gap:'10px'}}><label>Brand</label>
            <input value={brand} onChange={(e)=>{setbrand(e.target.value)}} type="text" /></div>
            <button onClick={()=>{handleSubmit()}} style={{backgroundColor:'#2a94ff',borderRadius:'10px',padding:'5px',border:'none',color:'white'}}>Submit</button>
        </form>



        </>
    )
}

export default Addproduct