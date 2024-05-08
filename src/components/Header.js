import React from "react"
import noteLogo from "../assets/note-logo.png"

const Header = () => {
  return (
    <header>
      <div className="flex justify-center">
        <img
          src={noteLogo}
          alt="black graphic of a note and a pencil"
          className="mx-4 my-2 h-7"
        />
      </div>

      <hr className="mx-4 mb-4 text-lightGray" />
    </header>
  )
}

export default Header
