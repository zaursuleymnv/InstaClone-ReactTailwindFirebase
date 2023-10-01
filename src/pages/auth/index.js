import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="w-full h-full flex flex-wrap overflow-auto gap-x-8 items-center justify-center">
        <Outlet/>
    </div>
  )
}
