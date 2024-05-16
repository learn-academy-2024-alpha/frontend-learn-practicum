import React from "react"
import noteLogo from "../assets/note-logo.png"
import bin from "../assets/bin.png"
import logOut from "../assets/logout.png"
import NewModal from "./NewModal"
import EditModal from "./EditModal"

const Header = ({
  signedOutUser,
  createNote,
  user,
  updateNote,
  selectedNote
}) => {
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

  console.log(user?.id)
  return (
    <header>
      <div className="flex justify-between bg-neutral">
        <div className="flex">
          <img
            src={noteLogo}
            alt="black graphic of a note and a pencil"
            className="mx-4 my-2 flex h-7 justify-start"
          />
          <NewModal createNote={createNote} userId={user?.id} />
        </div>
        <div className="flex justify-end">
          <EditModal
            selectedNote={selectedNote}
            user={user}
            updateNote={updateNote}
          />
          <img
            src={bin}
            alt="black graphic of a trash bin"
            className="mx-4 my-2 h-7"
          />
          <button type="button" onClick={signOut} className="underline">
            <img src={logOut} alt="sign out button" className="mx-4 my-2 h-7" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
