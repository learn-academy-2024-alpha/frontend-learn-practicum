import React, { useState } from "react"
import SideBar from "../components/SideBar"
import { useFetchGet } from "../utilities/useFetchGet"
import NoteShow from "../components/NoteShow"
const Main = ({ selectedNote, setSelectedNote }) => {
  const { data } = useFetchGet("notes")
  const notes = data
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden">
      <div className="flex h-full">
        <div className="w-64 bg-lightGray">
          <SideBar
            notes={notes}
            setSelectedNote={setSelectedNote}
            setSelectedDate={setSelectedDate}
            setSelectedUser={setSelectedUser}
          />
        </div>
        <div className="w-[calc(100vw-16rem)]">
          <NoteShow
            notes={notes}
            selectedNote={selectedNote}
            selectedDate={selectedDate}
            selectedUser={selectedUser}
          />
        </div>
      </div>
    </div>
  )
}
export default Main
