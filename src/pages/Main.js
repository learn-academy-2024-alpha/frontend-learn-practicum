import React from "react"
import NoteShow from "../components/NoteShow"
import { useFetchGet } from "../utilities/useFetchGet"
import FolderSideBar from "../components/FolderSideBar"
import SideBar from "../components/SideBar"

const Main = () => {
  const { data } = useFetchGet("notes")
  const notes = data
  const [selectedNote, setSelectedNote] = useState(null)
  const [selectedUser, setSelectedUser] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden">
      <div className="flex h-full">
        <div className="flex w-96 flex-row justify-between bg-lightGray">
          <FolderSideBar notes={notes} />
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
