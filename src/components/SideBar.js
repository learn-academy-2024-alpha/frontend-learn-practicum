import React from "react"
import NotesCard from "./NotesCard"
const SideBar = ({ notes }) => {
  return (
    <>
      <div className="h-screen overflow-scroll">
        {notes?.map((note) => (
          <NotesCard key={note.id} note={note} />
        ))}
      </div>
    </>
  )
}

export default SideBar
