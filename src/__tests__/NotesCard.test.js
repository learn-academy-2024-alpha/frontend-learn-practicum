import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import NotesCard from "../components/NotesCard"

test("renders the NotesCard component", () => {
  const note = {
    id: 1,
    title: "Wary message for Rhea Pollster",
    creator: 1,
    created_at: "May 10, 2024"
  }
  render(
    <BrowserRouter>
      <NotesCard key={note.id} note={note} />
    </BrowserRouter>
  )
  const notesCardTitle = screen.getByText(note.title)
  expect(notesCardTitle).toBeInTheDocument()

  const notesCardDate = screen.getByText(note.created_at)
  expect(notesCardDate).toBeInTheDocument()
})
