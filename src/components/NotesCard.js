import React from "react"
import { format } from "date-fns"
import { useFetchGet } from "../utilities/useFetchGet"

const NotesCard = ({
  note,
  setSelectedNote,
  setSelectedDate,
  setSelectedUser
}) => {
  const { title, creator, created_at } = note
  const formattedDate = format(created_at, "MMMM dd, yyyy")

  const { data } = useFetchGet(`user/${creator}`)
  const user = data
  console.log(user)
  const handleClick = (clickedNote) => {
    setSelectedNote(clickedNote)
    setSelectedDate(formattedDate)
    setSelectedUser(user)
  }
  return (
    <div
      className="p1 cursor-pointer border-b p-1"
      onClick={() => handleClick(note)}
    >
      <div>
        <h1 className="text-ellipsis text-nowrap font-extrabold">{title}</h1>
        <div className=" flex justify-between p-1">
          <h3 className="text-xs opacity-40">
            {" "}
            Creator: {user && user.username}
          </h3>
          <h3 className="text-xs opacity-40">{formattedDate}</h3>
        </div>
      </div>
    </div>
  )
}

export default NotesCard
