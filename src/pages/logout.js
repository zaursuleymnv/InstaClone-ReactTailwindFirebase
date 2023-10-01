import React, { useEffect } from 'react'
import { logout } from '../firebase.js'

export default function Logout() {

  return (
    useEffect(() => {
        logout()
    })
  )
}
