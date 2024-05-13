import React from "react"
import NotesCard from "./NotesCard"

const SideBar = ({ notes, setSelectedNote }) => {
  return (
    <>
      <div data-testid="sidebar-component" className="h-screen overflow-scroll">
        {notes?.map((note) => (
          <NotesCard
            setSelectedNote={setSelectedNote}
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </>
  )
}

export default SideBar
