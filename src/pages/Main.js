import React from "react"
import SideBar from "../components/SideBar"
import Note from "../components/Note"
import { useFetchGet } from "../utilities/useFetchGet"

const Main = () => {
  const { data } = useFetchGet("notes")
  const notes = data
  return (
    <div className="h-[calc(100vh-100px)] overflow-hidden">
      <div className="flex h-full">
        <div className="w-64 bg-lightGray">
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
