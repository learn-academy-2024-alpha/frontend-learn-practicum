import { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Dashboard from "./pages/Dashboard"
import Landing from "./pages/Landing"

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
  }, [])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        {user && <Route path="/dashboard" element={<Dashboard />} />}
      </Routes>
      <Footer />
    </>
  )
}

export default App
