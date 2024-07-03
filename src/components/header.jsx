import { useNavigate } from 'react-router-dom'
import '../css/header.css'
const Header = ()=>{
    const navigate = useNavigate();
    const email = localStorage.getItem('email');
    const userid = localStorage.getItem("id");
    const firstname = localStorage.getItem('firstname');
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
    return(
        <>
           <div id="header">
        <div id="nav1"><a onClick={()=>{navigate('/')}}><img style={{height:"77px", width:"290px", padding:"5px"}} src="https://logos-download.com/wp-content/uploads/2018/09/BigCommerce_Logo.png" alt=""/></a>
        <div id="search" style={{width:"686px"}}><input class="search_box" type="text" placeholder="Search..." name="search"/><i style={{position:"relative", bottom:"32px", left:"312px", color:"rgb(13, 17, 94)"}} class="fa fa-search fa-lg" aria-hidden="true"></i></div>
        <div id="nav1_1"><a onClick={()=>{if(!userid){
                alert("Please login first!")
            } navigate('/wishlist')}} class="a1"><i class="fa fa-heart fa-lg" aria-hidden="true"></i></a>
        <a onClick={()=>{if(!userid){
                alert("Please login first!")
            } navigate('/cart')}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-shopping-cart fa-lg" aria-hidden="true"></i></a>
        {!email &&<a onClick={()=>{navigate('/login')}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-user fa-lg" aria-hidden="true"></i></a>}
        {email &&
        <><a onClick={()=>{logoutInfo()}} class="a1"><i style={{color:"rgb(13, 17, 94)"}} class="fa fa-user fa-lg" aria-hidden="true"></i></a>
        <div onMouseLeave={()=>{logoutInfo1()}} id="prof" class="profile_drop"><div style={{width:"250px", height:"60px", backgroundColor:"rgb(8, 18, 39)"}}><h2 style={{padding:"20px", color:"white", backgroundColor:"rgb(8, 18, 39)"}}><b>Hi, {firstname}</b></h2></div>
        <ul class="menu2"><li>Your Account</li><li>Best sellers</li><li>New Releases</li><li>Customer services</li><li onClick={()=>{handleLogout()}}><a>Logout</a></li></ul>
        </div></>}
        </div></div>
        <div id="nav2"><input type="checkbox" id="checkbox-toggle"/>
            <label for="checkbox-toggle" class="hamburger2">&#9776;</label>        
            <ul id="menu1">
            <li><a class="a2" onClick={()=>{navigate('/products/men')}}>Men</a></li>
            <li><a class="a2" onClick={()=>{navigate('/products/women')}}>Women</a></li>
            <li><a class="a2" onClick={()=>{navigate('/products/electronics')}}>Electronics</a></li>
            <li><a class="a2" onClick={()=>{navigate('/products/accessories')}}>Accessories</a></li>
            <li><a class="a2" onClick={()=>{navigate('/products/lifestyle')}}>Lifestyle</a></li>
            <li><a class="a2" onClick={()=>{navigate('/products/jewellery')}}>Jewellery</a></li></ul></div>
    </div>

        </>
    )
}
export default Header

 