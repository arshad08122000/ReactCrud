import { useState,useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import axios from 'axios';

const Users=()=>{


    const [getUserdata, setUserdata] = useState([]);


 const getalldata = async (e) => {

  const res = await axios("https://reactcrudapi.onrender.com/users");
  console.log(res);

 
   const Userdata=await res.data;

  if (res.status === 200 && Userdata ) {
   setUserdata(Userdata);

  }
  else {
   console.log("error");
   alert("failed to Load user data");

  }

 }

 const deleteuser = async (id) => {
  const res2 = await axios.delete(`https://reactcrudapi.onrender.com/deleteuser/${id}`, id);
  if (res2.status === 404) {
   alert("failed to delete user");
  }
  else {
   alert("User Deleted Successfully");
   getalldata();
  }

 }


 useEffect(() => {
  getalldata();
 }, [])




 return(
  <>
 
   <div className="mt-5 mx-5">
    <div className="container">
     <div className="h1 text-center mb-5">List Of Users</div>
     
       <div className="add_btn">
        <Link to={'/Add'} className="btn btn-outline-success mr-1"><i className="fa-solid fa-plus"></i>Add User </Link>
       </div>
     


     <table className="table table-hover mt-5 p-5 ">
      <thead>
       <tr clasName="table-head fw-bold">
        <th scope="col">Id</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Job</th>
        <th scope="col">Age</th>
        <th scope="col">Phone No</th>
        <th scope="col mx-0">Action</th>
       </tr>
      </thead>
      <tbody>

        {
        getUserdata.map((element, id) => {
         return (
          <tr>
           <th scope="row">{id + 1}</th>
           <td>{element.name}</td>
           <td>{element.email}</td>
           <td>{element.work}</td>
           <td>{element.age}</td>
           <td>{element.mobile}</td>
           <td className="d-flex justify-content-between mx-0">
            <Link to={`/edit/${element._id}`} className="btn btn-outline-primary mx-0">Edit</Link>
            
            <button type="button" onClick={() => { deleteuser(element._id) }} className="btn btn-outline-danger">Delete</button>
           </td>
          </tr>
         )
        })
       } 

      </tbody>
     </table>
    </div>
   </div>
  </>
 );
}


export default Users;