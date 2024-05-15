import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./pages/Main"
import Landing from "./pages/Landing"

const App = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user")
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser))
    }
  }, [])

  const signedInUser = (userData) => {
    setUser(userData)
    navigate("/main")
  }
  const signedOutUser = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <>
      <Header signedOutUser={signedOutUser} />

      <Routes>
        <Route path="/" element={<Landing signedInUser={signedInUser} />} />
        {user && <Route path="/main" element={<Main />} />}
      </Routes>
      <Footer />
    </>
  )
}

export default App
