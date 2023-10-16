'use client'
import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';

const SignupPage = () => {
 const [name,setName] = React.useState<string>("")
 const [email,setEmail] = React.useState<string>("")
 const [password,setPassword] = React.useState<string>("")

 const handleSignUp = async () =>{
try{  const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({name,email,password}),
    
    credentials: 'include' //for cookies
})
const data = await response.json()
if (data.ok){

  console.log("Admin registration successful",data)
  toast.success("Admin registration successful",{
    position: toast.POSITION.TOP_CENTER
  })
}
else{
  console.error("Admin registration failed",response.statusText)
  toast.error("Admin registration failed",{
    position: toast.POSITION.TOP_CENTER
  })
}}catch(error){
  toast.error('An error occurred during registration.')
  console.error('An error occurred during registration.',error)
}
}
  return (
    <div className='formpage'>
      <input 
      type='text'
      placeholder='Name'
      value={name}
      onChange={(e)=>{
        e.preventDefault()
        setName(e.target.value)
      }}
      />
      <input 
      type='email'
      placeholder='Email'
      value={email}
      onChange={(e)=>{
        e.preventDefault()
        setEmail(e.target.value)
      }}
      />
      <input 
      type='password'
      placeholder='Password'
      value={password}
      onChange={(e)=>{
        e.preventDefault()
        setPassword(e.target.value)
      }}
      />
      <button onClick={handleSignUp}>SignUp</button>
    </div>
  )
}

export default SignupPage

