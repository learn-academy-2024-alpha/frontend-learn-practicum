import React from "react"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import Sidebar from "../components/SideBar"

test("renders the Sidebar component", () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  )
  const sidebarTitle = screen.getByTestId("sidebar-component")
  expect(sidebarTitle).toBeInTheDocument()
})
