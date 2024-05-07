import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Header from "../components/Header"

test("renders the deader component", () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )

  const headerLogo = screen.getByAltText(/black graphic of a note and a pencil/)
  expect(headerLogo).toBeInTheDocument()
})
