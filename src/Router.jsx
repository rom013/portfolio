import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Works"

const Router = () => {
  return (
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
  )
}

export default Router