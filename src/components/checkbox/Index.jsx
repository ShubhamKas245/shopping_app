import React from 'react'

const checkbox = ({
    field,
    meta,label,...props
}) => {
  return (
    <div className="flex items-center">
          <input type="checkbox" {...field} {...props} />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">{label}</label>
        </div>
  )
}

export default checkbox