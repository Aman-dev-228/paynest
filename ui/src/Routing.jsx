import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import CreateAccount from "./pages/CreateAccount"
import ListAccount from "./pages/ListAccount"
import LinkAccount from "./pages/LinkAccount"
import OTP from "./pages/OTP"
import Statement from "./pages/Statement"
import Balance from "./pages/Balance"

function Routing() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createAccount' element={<CreateAccount/>}/>
        <Route path='/listAccount' element={<ListAccount/>}/>
        <Route path='/linkAccount' element={<LinkAccount/>}/>
        <Route path='/otp' element={<OTP/>}/>
        <Route path='/statement' element={<Statement/>}/>
        <Route path='/balance' element={<Balance/>}/>

      </Routes>
    </div>
  )
}

export default Routing
