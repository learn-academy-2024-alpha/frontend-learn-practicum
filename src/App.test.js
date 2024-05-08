import React from "react"
import { render } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import App from "./App"

test("App.js", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})
