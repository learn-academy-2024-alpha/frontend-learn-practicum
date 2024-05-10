import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

test("renders the header component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const headerLogo = screen.getByAltText(/black graphic of a note and a pencil/)
  expect(headerLogo).toBeInTheDocument()
  const editLogo = screen.getByAltText(/black graphic of a notepad/)
  expect(editLogo).toBeInTheDocument()
  const addUserLogo = screen.getByAltText(/black graphic of a add user button/)
  expect(addUserLogo).toBeInTheDocument()
  const binLogo = screen.getByAltText(/black graphic of a trash bin/)
  expect(binLogo).toBeInTheDocument()
  const logOutLogo = screen.getByAltText(/sign out button/)
  expect(logOutLogo).toBeInTheDocument()
})
