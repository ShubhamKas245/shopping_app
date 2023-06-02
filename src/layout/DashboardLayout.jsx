import React from 'react'
import Header from '../Haeder';
import { Navigate, Outlet} from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const DashboardLayout = () => {

  const {user}=useContext(AuthContext);

  if(!user){
    return <Navigate to='/auth' replace />
  }
 
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default DashboardLayout;