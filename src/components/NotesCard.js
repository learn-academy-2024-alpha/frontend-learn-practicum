import React from "react"
import { format } from "date-fns"
import { Link } from "react-router-dom"
import { useFetchGet } from "../utilities/useFetchGet"

const NotesCard = ({ note }) => {
  const { title, creator, created_at } = note
  const formattedDate = format(created_at, "MMMM dd, yyyy")

  const { data } = useFetchGet(`user/${creator}`)
  const user = data
  return (
    <div className=" p1 border-b p-1">
      <Link>
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
      </Link>
    </div>
  )
}

export default NotesCard
