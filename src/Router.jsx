import { Route, Routes } from "react-router-dom"
import App from "./App"

const Router = () => {
  return (
    <Routes>
      <Route
        element={<App />}
        path='/'
      />
      <Route
        element={<h1>olla</h1>}
        path='/works'
      />
    </Routes>
  )
}

export default Router