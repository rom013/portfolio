import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Works from "./pages/Works"
import ReactGA from "react-ga4"

const Router = () => {
  ReactGA.initialize("G-4Q28CZKNWK")
  ReactGA.send(window.location.pathname + window.location.search)
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