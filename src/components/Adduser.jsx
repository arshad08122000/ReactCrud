import React from 'react';
import { useState,useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const AddUser=()=>{

 const navigate=useNavigate();

 const nameref=React.useRef();
 const emailref=React.useRef();
 const ageref=React.useRef();
 const mobileref=React.useRef();
 const workref = React.useRef();
 const addressref=React.useRef();
 const descref = React.useRef();

 

  const adduser=async(e)=>{
   e.preventDefault();
   
    const name=nameref.current.value;
    const address=addressref.current.value;
    const email=emailref.current.value;
    const age=ageref.current.value;
    const work=workref.current.value;
    const mobile=mobileref.current.value;
    const desc=descref.current.value;

    const Userdata={name,email,age,work,mobile,address,desc}

   console.log(name,email,address,age,work,mobile,desc);


   const res = await axios.post("https://reactcrudapi.onrender.com/Add",Userdata );

   const datat = await res.data;
   console.log(res);

   if (res.status === 200 && datat) {
    alert("Data added Successfully");
    console.log("Data successfully Added ");
    window.location.reload(false);
   }
   else {
    alert("Failed to Signin Plz,check Data or Signin Later");
    console.log("error");
   }
  }

 return(
  <>
   <div className="container p-5 main-container">
    <div className="h4 text-center mb-5">Add User</div>
    <div className="row mt-4">
     <div className="col-lg-6 col-sm-12">
      <div className="mb-3">
       <label className="form-label">Name*</label>
       <input type="email" className="form-control" ref={nameref}  name="name" id="name" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
       <label className="form-label">Mobile No*</label>
       <input type="text" className="form-control" ref={mobileref}  name="mobile" id="mobile" />
      </div>
      <div className="mb-3">
       <label className="form-label">Address*</label>
       <input type="text" className="form-control" ref={addressref} name="address" id="address" />
      </div>
      <div className="mb-3">
       <label className="form-label">Occupation*</label>
       <input type="text" className="form-control" ref={workref} name="work" id="work" />
      </div>
     </div>
     <div className="col-lg-6 col-sm">
      <div className="mb-3">
       <label className="form-label">Email*</label>
       <input type="email" className="form-control" name="email" ref={emailref}  id="email" />
      </div>
      <div className="mb-3">
       <label className="form-label">Age*</label>
       <input type="text" className="form-control" id="age" name="age" ref={ageref}  />
      </div>

     </div>
    </div>
    <div className="row">
     <div className="col">

      <div className="mb-3">
       <label className="form-label">Description</label>
       <textarea className="form-control" id="desc" name="desc" ref={descref}  rows="4"></textarea>
      </div>
      
     </div>
    </div>

    <form>
     <button type="submit" onClick={adduser} className="btn btn-outline-primary">Submit</button>
    </form>
   </div>
  </>
 );



 

}

export default AddUser;