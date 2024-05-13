import React from "react"
import { render, fireEvent, screen } from "@testing-library/react"
import { act } from "react"
import NewModal from "../components/NewModal"

const mockCreateNote = jest.fn()
const user = {
  id: "user123"
}

describe("NewModal component tests", () => {
  beforeEach(() => {
    render(<NewModal createNote={mockCreateNote} user={user} />)
  })

  test("should toggle the modal on button click", () => {
    const openModalButton = screen.getByAltText("Edit icon")

    expect(screen.queryByText("Create a New Note")).not.toBeInTheDocument()

    act(() => {
      fireEvent.click(openModalButton)
    })
    expect(screen.getByText("Create a New Note")).toBeInTheDocument()

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Close" }))
    })
    expect(screen.queryByText("Create a New Note")).not.toBeInTheDocument()
  })

  test("should handle form input and submit", async () => {
    act(() => {
      fireEvent.click(screen.getByAltText("Edit icon"))
    })

    await act(async () => {
      fireEvent.submit(screen.getByText("Create Note"))
    })
    expect(screen.getByText("Title is required")).toBeInTheDocument()
    expect(screen.getByText("Content is required")).toBeInTheDocument()

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Title"), {
        target: { value: "Test Title" }
      })
      fireEvent.change(screen.getByLabelText("Content"), {
        target: { value: "Test Content" }
      })
      fireEvent.click(screen.getByLabelText("Public"))
    })

    expect(screen.getByLabelText("Title").value).toBe("Test Title")
    expect(screen.getByLabelText("Content").value).toBe("Test Content")
    expect(screen.getByLabelText("Public").checked).toBeTruthy()

    await act(async () => {
      fireEvent.submit(screen.getByText("Create Note"))
    })

    expect(mockCreateNote).toHaveBeenCalledWith({
      title: "Test Title",
      content: "Test Content",
      public: true,
      creator: "user123"
    })

    expect(screen.queryByText("Title is required")).not.toBeInTheDocument()
    expect(screen.queryByText("Content is required")).not.toBeInTheDocument()
  })

  test("should display error when submitting empty form", async () => {
    act(() => {
      fireEvent.click(screen.getByAltText("Edit icon"))
    })

    await act(async () => {
      fireEvent.submit(screen.getByText("Create Note"))
    })

    expect(screen.getByText("Title is required")).toBeInTheDocument()
    expect(screen.getByText("Content is required")).toBeInTheDocument()

    expect(screen.getByText("Create a New Note")).toBeInTheDocument()
  })
})
