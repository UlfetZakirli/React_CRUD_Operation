import React, { useState } from "react";
import Button from "../../components/Button";
import TextField from "./../../components/TextField";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { editUser } from "./userSlice";

const EditUser = () => {
  const users=useSelector(store=>store.users)
  const params=useParams()
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const existingUser=users.filter((user)=>user.id===params.id)
  const {name,email}=existingUser[0]

  const [values, setValues] = useState({
    name,
    email,
  });

  const handleEditUser=()=>{
    setValues({name:'',email:""})
    navigate('/')
    dispatch(editUser({
      id:params.id,
      name:values.name,
      email:values.email
    }))
  }
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Name"
        inputProps={{ type: "text", placeholder: "Enter a name" }}
        onChange={(e)=>setValues({...values,name:e.target.value})}
        
      />
      <br />
      <TextField
        label="Email"
        inputProps={{ type: "email", placeholder: "Enter an email" }}
        onChange={(e)=>setValues({...values,email:e.target.value})}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
