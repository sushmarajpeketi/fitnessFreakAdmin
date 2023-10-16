'use client'
import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import './Navbar.css'
import logo from './logo.png'

const Navbar = () => {
    const [isAdminAuthenticated,setIsAdminAuthenticated]= React.useState<boolean>(false)
  return (
    <div className='navbar'>
        <Image src={logo} alt='logo' width={100} className='logo'/>
        <div className='adminlinks'>
            {isAdminAuthenticated ?
            (
                <>
                    <Link href='/pages/addworkout'> Add Workout </Link>
                </>
            )
            :
            (
                <>
                <Link href='/Adminauth/login'> Login </Link>
                <Link href='/Adminauth/register'> SignUp </Link>
                </>
            )}
        </div>

    </div>
  )
}

export default Navbar