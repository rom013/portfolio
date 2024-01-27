import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Works"
import { Analytics } from "@vercel/analytics/react"

const Router = () => {
  return (
    <>
      <Analytics />
      <Routes>
        <Route
          element={<Home />}
          path='/'
        />
        <Route
          element={<Works />}
          path='/works'
        />
      </Routes>
    </>
  )
}

export default Router