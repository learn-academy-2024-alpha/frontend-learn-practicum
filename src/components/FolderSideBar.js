import React from "react"
import FolderIcon from "../assets/empty-folder-icon.png"

const FolderSideBar = () => {
  return (
    <div className="ig:flex h-screen">
      <div className="w-full">
        <div className="flex-row justify-center flex w-full bg-neutral pb-2">
          <img className="w-8 p-1" src={FolderIcon} alt="clear folder icon" />
          <h1 className="text-2xl ">Public</h1>
        </div>
        <div className="flex-row justify-center flex w-full pt-2">
          <img className="w-8 p-1" src={FolderIcon} alt="clear folder icon" />
          <h1 className="text-2xl ">Private</h1>
        </div>
      </div>
    </div>
  )
}

export default FolderSideBar
