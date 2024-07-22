import { Navigate } from "react-router-dom";
import React from 'react'

const ProtectedRoute= ({children, user}) => {
  return (
    user ? children : <Navigate to="/"></Navigate>
  )
}

export default ProtectedRoute