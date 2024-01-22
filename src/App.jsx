import Layout from "./Layout"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Dashboard from "./Dashboard"
import Readme from "./Readme"
import EditTransaction from "./EditTransaction"

function App() {
  
  return (
   <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:id" element={<EditTransaction />} />
        <Route path="/readme" element={<Readme />} />
      </Route>
    </Routes>
   </>
  )
}

export default App
