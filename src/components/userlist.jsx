import axios from 'axios'
import { useEffect, useState } from 'react'
const Userlist = ()=>{
    const [userdata, setuserdata] = useState('');
    const getalluserData = ()=>{
        axios.get("https://e-commbackend-fast-api.vercel.app/users/userlist").then((response)=>{
            setuserdata(response.data.message)
        })
    }
    useEffect(()=>{
        getalluserData();
    },[])
    const handleDelete = (userId)=>{
        axios.delete(`https://e-commbackend-fast-api.vercel.app/users/deleteuser/${userId}`).then((response)=>{
            console.log(response);
            getalluserData();
        })
    }
   
    return(
        <>
         <table border={1} width={800} align="center">
                <tr>
                    <th>User id </th><th>First name </th><th>Last name</th><th>Email</th><th>Password</th><th>Action</th>
                </tr>
                { userdata && userdata.map((user)=>(
                    <tr>
                        <td>{user._id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>
                            <input type='button' value="Delete" onClick={()=>{handleDelete(user._id)}}/>
                            <input type='button' value="Edit" />
                        </td>
                    </tr>
                ))}
            
         </table>
        </>
    )
}
export default Userlist