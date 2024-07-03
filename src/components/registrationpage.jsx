import { useLocation, useNavigate } from 'react-router-dom';
import '../css/registration.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Registration = ()=>{

            // var fname = document.getElementById("fname").value;
            // var lname = document.getElementById("lname").value;
            // var password1 = document.getElementById("password").value;
            // var email1 = document.getElementById("email").value;
            // var mob_no = document.getElementById("mob_no").value;

            
    const location = useLocation();
    console.log(location);
    const [formname,getformname] = useState('Create Account')
    const [buttonname,getbuttonname] = useState('Sign In');
    const [firstname,getfirstname] = useState('');
    const [lastname,getlastname] = useState('');
    const [phoneno,getphoneno] = useState('');
    const [email,getemail] = useState('');
    const [password,getpassword] = useState('');
    const firstnameHanadler = (event)=>{
        getfirstname(event.target.value)
    }
    const lastnameHanadler = (event)=>{
        getlastname(event.target.value)
    }
    const phonenoHanadler = (event)=>{
        getphoneno(event.target.value)
    }
    const emailHanadler = (event)=>{
        getemail(event.target.value)
    }
    const passwordHanadler = (event)=>{
        getpassword(event.target.value)
    }
    const navigate = useNavigate();

    let countr = 0;
    let countl = 0;
        
            
    const submitHandler= (event)=>{
        event.preventDefault();
        //console.log(firstname+lastname+phoneno+email+password)

        if(location.pathname === '/login'){
            const expression_email = /^[a-z A-Z _ 0-9]+@[a-z A-Z]+\.[a-z A-Z]{2,5}$/;
            if(String(email).match(expression_email)){
                document.getElementById("email_error").innerHTML= "";
            }else{
                document.getElementById("login_error").innerHTML= "Invalid email!";
                countl = countl + 1 ;
            }
            if(countl==0){let registrationData ={email:email,password:password}
            axios.post('https://e-comwebsite-backend.vercel.app/users/login',registrationData).then((response)=>{
                if(response.data.message === 'email or password does not match'){
                    //getformerror('Email or password is wrong');
                    console.log('Email or password is wrong');
                    document.getElementById("login_error").innerHTML="Wrong email or password";

                }else{
                    localStorage.setItem('email',response.data.message.email)
                    localStorage.setItem('firstname',response.data.message.firstname)
                    localStorage.setItem('id',response.data.message._id)
                   navigate('/')
                }
                
    
            })}

        }else if(location.pathname === '/registration'){
            const expression_fname = /^[a-z A-Z]{2,15}$/;
            const expression_lname = /^[a-z A-Z]{2,15}$/;
            const expression_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            const expression_email = /^[a-z A-Z _ 0-9]+@[a-z A-Z]+\.[a-z A-Z]{2,5}$/;
            const expression_mob_no = /^[0-9]{10}$/;
            if(String(firstname).match(expression_fname)){
                document.getElementById("fname_error").innerHTML= "";
            }else{
                document.getElementById("fname_error").innerHTML= "Invalid name!";
                countr = countr + 1 ;
            }
            if(String(lastname).match(expression_lname)){
                document.getElementById("lname_error").innerHTML= "";
            }else{
                document.getElementById("lname_error").innerHTML= "Invalid name!";
                countr = countr + 1 ;
            }
            // if(String(password).match(expression_password)){
            //     document.getElementById("password_error").innerHTML= "";
            // }else{
            //     document.getElementById("password_error").innerHTML= "Invalid password!";
            //     count = count + 1 ;
            // }
            if(String(email).match(expression_email)){
                document.getElementById("email_error").innerHTML= "";
            }else{
                document.getElementById("email_error").innerHTML= "Invalid email!";
                countr = countr + 1 ;
            }
            if(String(phoneno).match(expression_mob_no)){
                document.getElementById("mob_no").innerHTML= "";
            }else{
                document.getElementById("mob_no_error").innerHTML= "Invalid phone no.!";
                countr = countr + 1 ;
            }

            // String(fname).match(expression_fname)? document.getElementById("fname_error").innerHTML= "":document.getElementById("fname_error").innerHTML= "Invalid name!",  count = count + 1 ;
            // String(lname).match(expression_lname)? document.getElementById("lname_error").innerHTML= "":document.getElementById("lname_error").innerHTML= "Invalid name!",  count = count + 1 ;
            // String(password).match(expression_password)? document.getElementById("password_error").innerHTML= "":document.getElementById("password_error").innerHTML= "Invalid password!",  count = count + 1 ;
            // String(email).match(expression_email)? document.getElementById("email_error").innerHTML= "":document.getElementById("email_error").innerHTML= "Invalid email!",  count = count + 1 ;
            // String(mob_no).match(expression_mob_no)? document.getElementById("mob_no_error").innerHTML= "":document.getElementById("mob_no_error").innerHTML= "Invalid mobile number!",  count = count + 1 ;
        

            if(countr==0){let registrationData ={firstname:firstname,lastname:lastname,phoneno:phoneno,email:email,password:password}
        axios.post('https://e-comwebsite-backend.vercel.app/users/registration',registrationData).then((response)=>{
                console.log(response);
                navigate('/login');

        })}}
    }

    useEffect(()=>{
        if(location.pathname === '/login'){
            getformname('Log In')
            getbuttonname('Continue')
        }
    },[])
    
    return(
        <>
  <div id="header">
        <a onClick={()=>{navigate('/')}}><img style={{height:"77px", width:"290px", padding:"5px"}} src="https://logos-download.com/wp-content/uploads/2018/09/BigCommerce_Logo.png" alt=""/></a>
    </div>
    <div id="content">
            <form class="login1">
            <h1 style={{color:"rgb(14, 37, 86)"}}>{formname}</h1><br/>
            { buttonname === 'Sign In' &&
            <>
                <label><strong>First Name:</strong></label><br/> 
                <input id="fname" style={{height:"24px", width:"339px"}} type="text" name="firstname" value={firstname} onChange={firstnameHanadler} required/><br/>
                <h4 style={{color:"red"}} id="fname_error"></h4><br/>
                <label><strong>Last Name:</strong></label><br/> 
                <input id="lname" style={{height:"24px", width:"339px"}} type="text" name="lastname" value={lastname} onChange={lastnameHanadler} required/><br/>
                <h4 style={{color:"red"}} id="lname_error"></h4> <br/> 
                <label><strong>Mobile No.:</strong></label><br/>
                <input id="mob_no" style={{height:"24px", width:"339px"}} type="tel" name="Phone_No." value={phoneno} onChange={phonenoHanadler} required/><br/>
                <h4 style={{color:"red"}} id="mob_no_error"></h4><br/>
                </>
            }
                <label><strong>Email Id:</strong></label><br/> 
                <input id="email" style={{height:"24px", width:"339px"}} type="email" name="email" value={email} onChange={emailHanadler} required/> <br/>
                <h4 style={{color:"red"}} id="email_error"></h4><br/>
                <label><strong>Password:</strong></label><br/> 
                <input id="password" style={{height:"24px", width:"339px"}} type="Password" name="password" value={password} onChange={passwordHanadler} required/><br/>
                <h4 style={{color:"red"}} id="password_error"></h4><br/>
                <input class="submit_button" type="submit" value={buttonname} onClick={submitHandler} name="submit"/>
                { buttonname === 'Sign In' &&<p style={{marginTop:"10px", textAlign:"center"}}>Already have an account? <a style={{color:"blue"}} onClick={()=>{navigate('/login')}}>Log In</a></p>}
                { buttonname === 'Continue' &&<><p id="login_error" style={{marginTop:"10px", textAlign:"center", color:"red"}}></p><p style={{marginTop:"10px", textAlign:"center"}}>New to Big Commerce? <a style={{color:"blue"}} onClick={()=>{navigate('/registration')}}>Create Account</a></p></>}
            </form>
        </div>  


        </>
    )
}
export default Registration


