import React from "react"
import Note from "../components/Note"
import { useFetchGet } from "../utilities/useFetchGet"
import FolderSideBar from "../components/FolderSideBar"
import SideBar from "../components/SideBar"

const Main = () => {
  const { data } = useFetchGet("notes")
  const notes = data
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden">
      <div className="flex h-full">
        <div className="flex w-96 flex-row bg-lightGray">
          <FolderSideBar />
          <SideBar notes={notes} />
        </div>
        <div className="w-[calc(100vw-16rem)]">
          <Note />
        </div>
      </div>
    </div>
  )
}

export default Main
