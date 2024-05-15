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
    } else {
      navigate("/")
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

  const createNote = async (newNote) => {
    try {
      const postResponse = await fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newNote)
      })
      console.log(postResponse)
      if (!postResponse.ok) {
        throw new Error("Server responded with status: " + postResponse.status)
      }
      await postResponse.json()
    } catch (error) {
      console.error("Error in createNote:", error)
      alert("Oops something went wrong: " + error.message)
    }
  }

  return (
    <>
      <Header
        user={user}
        signedOutUser={signedOutUser}
        createNote={createNote}
      />
      <Routes>
        <Route path="/" element={<Landing signedInUser={signedInUser} />} />
        {user && <Route path="/main" element={<Main />} />}
      </Routes>
      <Footer />
    </>
  )
}

export default App
