import React from "react"
import noteLogo from "../assets/note-logo.png"

const Header = ({ signedOutUser }) => {
  const signOut = async () => {
    try {
      const signOutResponse = await fetch("http://localhost:3000/logout", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token")
        }
      })
      if (!signOutResponse.ok) throw new Error("Fetch to sign out")
      await signOutResponse.json()
      signedOutUser()
      localStorage.removeItem("token")
      localStorage.removeItem("user")
    } catch (error) {
      console.error("Error: failed to sign out", error)
    }
  }
  return (
    <header>
      <div className="flex justify-between">
        <img
          src={noteLogo}
          alt="black graphic of a note and a pencil"
          className="mx-4 my-2 h-7"
        />
        <button type="button" onClick={signOut} className="underline">
          Sign Out
        </button>
      </div>
    </header>
  )
}

export default Header
