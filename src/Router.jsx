import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Works"
import ReactGA from "react-ga4"

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