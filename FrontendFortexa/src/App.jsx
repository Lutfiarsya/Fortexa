import LoginPage from "./pages/loginPage"
import { BrowserRouter as Router, Routes, Route } from "react-router"
import Homepage from "./pages/homepage"
import RegisterPage from "./pages/registerPage"

const App = () => {
  return(
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>


        <Route path="/" element={<Homepage/>} />
      </Routes>
    </Router>
  )
}

export default App