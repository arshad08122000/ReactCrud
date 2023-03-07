import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios'

const EditUser=()=>{
 
 const Navigate=useNavigate();

 const {id}=useParams("");

 const [inpval, setINP] = useState({
  name: "",
  email: "",
  age: "",
  mobile: "",
  work: "",
  address: "",
  desc: ""
 })

 const setdata = (e) => {
  const { name, value } = e.target;
  setINP({ ...inpval, [name]: value });
 }


 const getuser = async () => {

  const res = await axios.get(`https://reactcrudapi.onrender.com/view/${id}`);

  const Userdata = await res.data;
  console.log(Userdata);

  if (res.status === 404 || !Userdata) {
   console.log("error");
  }
  else {
   setINP(Userdata);
   console.log("User Name : " + inpval.name);
  }
 }
 
  const updateuser=async(e)=>{
 
  e.preventDefault();

  const {name,email,work,address,mobile,desc,age}=inpval;
  const Userdata={name,email,work,address,mobile,desc,age};
  console.log(Userdata);


   const res2 = await axios.patch(`https://reactcrudapi.onrender.com/updateuser/${id}`,Userdata);
  const NewUserdata=await res2.data;
  console.log(res2);
  console.log(NewUserdata);
  if(res2.status===200)
  {
   alert("Details Updated");
    Navigate('/users');
  }
  else
  {
    alert("Failed To Update Details");
  }
 }

 // eslint-disable-next-line react-hooks/exhaustive-deps
 useEffect(() => { getuser(); }, []);

 
 return(
  <>
   <div className="container p-5 main-container">
    <div className="h4 text-center mb-5">Edit User Details</div>
    <div className="row mt-4">
     <div className="col-lg-6 col-sm-12">
      <div className="mb-3">
       <label className="form-label">Name</label>
       <input type="email" className="form-control" value={inpval.name} onChange={(e) => { setdata(e) }} name="name" id="name" aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
       <label className="form-label">Mobile No</label>
       <input type="text" className="form-control" value={inpval.mobile} onChange={(e) => { setdata(e) }} name="mobile" id="mobile" />
      </div>
      <div className="mb-3">
       <label className="form-label">Address</label>
       <input type="text" className="form-control" value={inpval.address} onChange={(e) => { setdata(e) }} name="address" id="address" />
      </div>
      <div className="mb-3">
       <label className="form-label">Work</label>
       <input type="text" className="form-control" value={inpval.work} onChange={(e) => { setdata(e) }} name="work" id="work" />
      </div>
     </div>
     <div className="col-lg-6 col-sm">
      <div className="mb-3">
       <label className="form-label">Email address</label>
       <input type="email" className="form-control" name="email" value={inpval.email} onChange={(e) => { setdata(e) }} id="email" aria-describedby="emailHelp" />
      </div>

      <div className="mb-3">
       <label className="form-label">Age</label>
       <input type="text" className="form-control" id="age" name="age" value={inpval.age} onChange={(e) => { setdata(e) }} />
      </div>

     </div>
    </div>
    <div className="row">
     <div className="col">

      <div className="mb-3">
       <label className="form-label">Example textarea</label>
       <textarea className="form-control" id="desc" name="desc" value={inpval.desc} onChange={(e) => { setdata(e) }} rows="4"></textarea>
      </div>
     </div>
    </div>

    <form>
     <button type="submit" onClick={updateuser} className="btn btn-outline-primary">Submit</button>
    </form>
   </div>
  </>
 );
}

export default EditUser;