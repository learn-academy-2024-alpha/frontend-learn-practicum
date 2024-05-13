import React, { useState } from "react"
import SideBar from "../components/SideBar"
import { useFetchGet } from "../utilities/useFetchGet"
import NoteShow from "../components/NoteShow"

const Main = () => {
  const { data } = useFetchGet("notes")
  const notes = data
  const [selectedNote, setSelectedNote] = useState(null)
  console.log(selectedNote)
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden">
      <div className="flex h-full">
        <div className="w-64 bg-lightGray">
          <SideBar notes={notes} setSelectedNote={setSelectedNote} />
        </div>
        <div className="w-[calc(100vw-16rem)]">
          <NoteShow selectedNote={selectedNote} notes={notes} />
        </div>
      </div>
    </div>
  )
}

export default Main
