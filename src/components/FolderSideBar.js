import { useState } from "react"
import FolderIcon from "../assets/empty-folder-icon.png"

const FolderSideBar = () => {
  const [inactive, setInactive] = useState("Private")
  const [active, setActive] = useState("Public")

  const handleClickInactive = () => {
    if (active === "Public") {
      setActive("Private")
      setInactive("Public")
    } else {
      setActive("Public")
      setInactive("Private")
    }
  }
  return (
    <div className="h-screen w-[35%]">
      <div className="w-full">
        <div className="flex-row justify-center flex w-full bg-neutral pb-2">
          <img className="w-8 p-1" src={FolderIcon} alt="clear folder icon" />
          <h1 className="text-2xl ">{active}</h1>
        </div>
        <div className="flex-row justify-center flex w-full pt-2">
          <button
            onClick={handleClickInactive}
            className="flex-row justify-center flex w-full pt-2"
          >
            <img className="w-8 p-1" src={FolderIcon} alt="clear folder icon" />
            <h1 className="w-[65%] text-2xl">{inactive}</h1>
          </button>
        </div>
      </div>
    </div>
  )
}

export default FolderSideBar
