import React from "react"
import NotesCard from "./NotesCard"
const SideBar = ({
  notes,
  setSelectedNote,
  setSelectedDate,
  setSelectedUser
}) => {
  return (
    <>
      <div data-testid="sidebar-component" className="h-screen overflow-scroll">
        {notes?.map((note) => (
          <NotesCard
            setSelectedNote={setSelectedNote}
            setSelectedDate={setSelectedDate}
            setSelectedUser={setSelectedUser}
            key={note.id}
            note={note}
          />
        ))}
      </div>
    </>
  )
}
export default SideBar
