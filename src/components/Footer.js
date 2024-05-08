import React from "react"
import noteLogo from "../assets/note-logo.png"

const Footer = () => {
  return (
    <footer>
      <hr className="mx-4 mb-4 text-lightGray" />

      <div className="flex justify-between bg-white">
        <div className="mx-4 my-2">
          <p>Created at LEARN Academy | Alpha Cohort &copy; 2024</p>
        </div>
        <img
          src={noteLogo}
          alt="black graphic of a note and a pencil"
          className="mx-4 my-2 h-7"
        />
      </div>
    </footer>
  )
}

export default Footer
