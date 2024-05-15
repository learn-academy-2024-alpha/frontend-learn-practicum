import React from "react"
const NoteShow = ({ selectedNote, selectedDate, selectedUser }) => {
  console.log(`date: ${selectedDate}`)
  console.log(`user: ${selectedUser}`)
  console.log(`note: ${selectedNote}`)
  return (
    <>
      <div className="flex justify-between p-2">
        <p>Created by: {selectedUser}</p>
        <p>{selectedDate}</p>
      </div>
      <h1 className="text-center text-4xl font-bold">{selectedNote?.title}</h1>
      <div className="px-20 py-10">
        <p>{selectedNote?.content}</p>
      </div>
    </>
  )
}
export default NoteShow
