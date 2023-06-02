import React, { useEffect } from 'react'
import Header from '../Haeder';
import { Outlet, useNavigate } from 'react-router-dom';

const DashboardLayout = () => {
  const navigate=useNavigate();
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(!token){
      navigate('/auth',{replace:true})
    }
  })
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default DashboardLayout;