import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Footer from "../components/Footer"

test("renders the footer component", () => {
  render(
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  )

  const footerLogo = screen.getByAltText(/black graphic of a note and a pencil/)
  expect(footerLogo).toBeInTheDocument()

  const footerContent = screen.getByText(
    /Created at LEARN Academy | Alpha Cohort © 2024/
  )
  expect(footerContent).toBeInTheDocument()
})
