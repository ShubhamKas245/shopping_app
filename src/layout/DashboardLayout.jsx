import React from 'react'
import Header from '../Haeder';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

export default DashboardLayout;