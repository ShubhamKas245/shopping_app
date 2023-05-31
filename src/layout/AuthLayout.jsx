import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-8 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img
        className="mx-auto h-10 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
        alt="Your Company"
      />
      <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
      <p className="mt-3 text-center text-sm text-gray-500">
        or  {' '}
        <Link to='register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Start a 14 day free trial
        </Link>
      </p>
    </div>
    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
    <Outlet />
    </div>
    </div>
  )
}

export default AuthLayout