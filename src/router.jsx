import { createBrowserRouter } from "react-router-dom"
import GuestLayout from "./layout/GuestLayout"
import Login from "./components/Login"
import Signup from "./components/Signup"
import DefaultLayout from "./layout/DefaultLayout"
import Feed from "./components/Feed"

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
    ],
  },
])

export default router
