import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NoteShow from "../components/NoteShow"

test("renders the NoteShow component", () => {
  const selectedNote = {
    id: 1,
    title: "Serene message for Ellie Noise",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, placeat soluta esse a commodi molestiae obcaecati praesentium, iste natus consequatur amet nostrum ipsum non sapiente temporibus nulla hic rem sunt.",
    creator: 1
  }
  const selectedDate = "May, 13, 2024"
  const selectedUser = "des.buratto"
  render(
    <BrowserRouter>
      <NoteShow
        selectedNote={selectedNote}
        selectedDate={selectedDate}
        selectedUser={selectedUser}
      />
    </BrowserRouter>
  )
  const title = screen.getByText(selectedNote.title)
  expect(title).toBeInTheDocument()

  const content = screen.getByText(selectedNote.content)
  expect(content).toBeInTheDocument()

  const date = screen.getByText(selectedDate)
  expect(date).toBeInTheDocument()

  const user = screen.getByText(/des.buratto/)
  expect(user).toBeInTheDocument()
})
