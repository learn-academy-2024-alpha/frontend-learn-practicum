import React from "react"

const NoteShow = ({ selectedNote }) => {
  return (
    <div>
      <div>
        <p>{selectedNote?.creator}</p>
        <p>{selectedNote?.created_at}</p>
      </div>
      <h1 className="text-center text-4xl">{selectedNote?.title}</h1>
      <div className="px-20 py-10">
        <p>{selectedNote?.content}</p>
      </div>
    </div>
  )
}

export default NoteShow
