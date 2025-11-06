import { useNavigate } from 'react-router-dom'
import '../css/header.css'
import axios from 'axios'
import { useState,useEffect } from 'react';
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux'
import { addsearch } from '../redux/features/search/searchslice';
import { useParams } from 'react-router-dom';

const Header = ()=>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const params = useParams();

    const count = useSelector(state=>state);
    const[cartcount, setcartcount] = useState(0);
    const[search, setsearch] = useState('');

    const email = localStorage.getItem('email');
    const userid = localStorage.getItem("id");
    const firstname = localStorage.getItem('firstname');

    const getallcartData = ()=>{
        axios.get(`https://e-comwebsite-backend.onrender.com/cart/cartlist/${userid}`).then((response)=>{
            setcartcount(response.data.message.length);
        })
    }

    const handleLogout = ()=>{
        localStorage.clear();
        navigate('/login')
    }
    const logoutInfo = ()=>{
        document.getElementById("prof").style.display="block";
    }
    const logoutInfo1 = ()=>{
        document.getElementById("prof").style.display="none";
    }
    
    const searchFunc=()=>{
         dispatch(addsearch(search))
         navigate('/products')
    }

    useEffect(()=>{
        getallcartData();
    },[])

    return(
        <>
           <div id="header">
        <div id="nav1"><a onClick={()=>{navigate('/')}}>
           <img style={{width:"200px", padding:"5px"}} src="/images/BigCommerce_Logo.png" alt=""/></a>
           <div id="search" style={{width:"686px"}}>
            <input onChange={(e)=>setsearch(e.target.value)} class="search_box" type="text" placeholder="Search..." name="search"/>
            <i onClick={()=>{searchFunc()}} style={{position:"relative", bottom:"32px", left:"312px", color:"rgb(13, 17, 94)"}} class="fa fa-search" aria-hidden="true"></i>
           </div>
        <div id="nav1_1"><a onClick={()=>{if(!userid){
                alert("Please login first!")
            } navigate('/wishlist')}} class="a1"><i class="fa fa-heart" aria-hidden="true"></i></a>
        <a onClick={()=>{if(!userid){
                alert("Please login first!")
            } navigate('/cart')}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-shopping-cart" aria-hidden="true"></i>

            {cartcount !=0 &&
            <span class='badge badge-warning' id='lblCartCount'>{cartcount}</span>}
            
            </a>
        {!email &&<a onClick={()=>{navigate('/login')}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-user" aria-hidden="true"></i></a>}
        {email &&
        <><a onClick={()=>{logoutInfo()}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-user" aria-hidden="true"></i></a>
        <div onMouseLeave={()=>{logoutInfo1()}} id="prof" class="profile_drop"><div style={{width:"250px", height:"60px", backgroundColor:"rgb(8, 18, 39)"}}><h2 style={{padding:"20px", color:"white", backgroundColor:"rgb(8, 18, 39)"}}><b>Hi, {firstname}</b></h2></div>
        <ul class="menu2"><li>Your Account</li><li>Best sellers</li><li>New Releases</li><li>Customer services</li><li onClick={()=>{handleLogout()}}><a>Logout</a></li></ul>
        </div></>}
        </div></div>
        <div id="nav2"><input type="checkbox" id="checkbox-toggle"/>
            <label for="checkbox-toggle" class="hamburger2">&#9776;</label>        
            <ul id="menu1">
            <li><a class="a2" style={params.category=='men' ? {color:'red'}:{}} onClick={()=>{navigate('/products/men')}}>Men</a></li>
            <li><a class="a2" style={params.category=='women' ? {color:'red'}:{}} onClick={()=>{navigate('/products/women'); window.location.reload()}}>Women</a></li>
            <li><a class="a2" style={params.category=='electronics' ? {color:'red'}:{}} onClick={()=>{navigate('/products/electronics'); window.location.reload()}}>Electronics</a></li>
            <li><a class="a2" style={params.category=='accessories' ? {color:'red'}:{}} onClick={()=>{navigate('/products/accessories'); window.location.reload()}}>Accessories</a></li>
            <li><a class="a2" style={params.category=='lifestyle' ? {color:'red'}:{}} onClick={()=>{navigate('/products/lifestyle'); window.location.reload()}}>Lifestyle</a></li>
            <li><a class="a2" style={params.category=='jewellery' ? {color:'red'}:{}} onClick={()=>{navigate('/products/jewellery'); window.location.reload()}}>Jewellery</a></li></ul></div>
    </div>

        </>
    )
}
export default Header

 