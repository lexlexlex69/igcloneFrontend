import React, { useRef } from "react"
import axiosClient from "../AxiosClient"
import { useStateContext } from "../context/ContextProvider"

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { setToken } = useStateContext()
  const onSubmit = (ev) => {
    ev.preventDefault()
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    }
    console.log("login", payload)
    axiosClient
      .post("/login", payload)
      .then(({ data }) => {
        setToken(data.token)
        console.log(data.token)
      })
      .catch((err) => console.error(err))
  }
  return (
    <>
      <form onSubmit={onSubmit}>
        <input ref={emailRef} type="email" />
        <input ref={passwordRef} type="password" />
        <button>Login</button>
      </form>
    </>
  )
}

export default Login
