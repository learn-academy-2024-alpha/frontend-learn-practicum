import React from "react"

const SideBar = ({ notes }) => {
  return (
    <>
      {notes?.map((note) => (
        <div key={note.id}>{note.title}</div>
      ))}
    </>
  )
}

export default SideBar
