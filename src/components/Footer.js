import noteLogo from "../assets/note-logo.png"

const Footer = () => {
  return (
    <>
      <hr className="mx-4 mb-4 text-lightGray" />

      <div className="flex justify-between bg-white">
        <div className="mx-4 my-2">
          <p>Created at LEARN Academy | Alpha Cohort &copy; 2024</p>
        </div>
        <img
          src={noteLogo}
          alt="black graphic of a note and a pencil"
          className="h-7 mx-4 my-2"
        />
      </div>
    </>
  )
}

export default Footer
