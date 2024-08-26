import React, { useEffect } from "react"
import { useStateContext } from "../context/ContextProvider"
import { Navigate, Outlet, useNavigate } from "react-router-dom"
import axiosClient from "../AxiosClient"

function DefaultLayout() {
  const { token, setToken } = useStateContext()
  const navigate = useNavigate()
  //debugger
  if (!token) {
    return <Navigate to="/login" />
  }

  useEffect(() => {}, [])

  const logout = (ev) => {
    axiosClient.post("/logout").then(() => {
      setToken(null)
    })
  }

  return (
    <div>
      <button onClick={logout}>logout</button>
      DefaultLayout <Outlet />
    </div>
  )
}

export default DefaultLayout
