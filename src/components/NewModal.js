import React, { useReducer } from "react"
import { Button, Modal, Radio, Label, TextInput } from "flowbite-react"
import edit from "../assets/edit.png"

const initialState = {
  openModal: false,
  title: "",
  content: "",
  public: true,
  errors: { title: false, content: false }
}

function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_MODAL":
      return { ...state, openModal: !state.openModal }
    case "SET_FIELD":
      return { ...state, [action.field]: action.value }
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.value }
      }
    default:
      throw new Error("Unhandled action type: " + action.type)
  }
}

const NewModal = ({ createNote, user }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleInputChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value })
    if (state.errors[field]) {
      dispatch({ type: "SET_ERROR", field, value: false })
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    const { title, content, public: isPublic } = state
    let errors = {}
    if (!title) errors.title = true
    if (!content) errors.content = true

    if (Object.keys(errors).length) {
      for (let error in errors) {
        dispatch({ type: "SET_ERROR", field: error, value: true })
      }
      return
    }

    if (user && user.id) {
      await createNote({
        title,
        content,
        public: isPublic,
        creator: user.id
      })
      dispatch({ type: "TOGGLE_MODAL" })
    } else {
      console.error("User data is not available")
    }
  }

  return (
    <>
      <button onClick={() => dispatch({ type: "TOGGLE_MODAL" })}>
        <img src={edit} alt="Edit icon" className="mx-4 my-2 h-7" />
      </button>
      <Modal
        className="m-auto h-4/5 w-1/2 bg-gray "
        show={state.openModal}
        onClose={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        <Modal.Header className="m-3 text-xl font-semibold"></Modal.Header>
        <h1 className="mb-3 text-center text-3xl font-semibold">
          <u>Create a New Note</u>
        </h1>
        <form onSubmit={handleFormSubmit}>
          <fieldset className=" p-10">
            <div className="flex justify-center gap-4">
              <Radio
                id="public"
                name="public"
                value="true"
                checked={state.public}
                onChange={() => handleInputChange("public", true)}
              />
              <Label htmlFor="public">Public</Label>
              <Radio
                id="private"
                name="public"
                value="false"
                checked={!state.public}
                onChange={() => handleInputChange("public", false)}
              />
              <Label htmlFor="private">Private</Label>
            </div>
          </fieldset>
          <Modal.Body>
            <Label htmlFor="title" className="mb-2 block text-center">
              Title
            </Label>
            <input
              id="title"
              type="text"
              className="mx-auto flex w-64 rounded-lg border-2 p-4"
              value={state.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            {state.errors.title && (
              <p className="mt-1 text-center text-xs text-error">
                Title is required
              </p>
            )}

            <Label htmlFor="content" className="mb-2 block text-center">
              Content
            </Label>
            <textarea
              className="mx-auto w-full rounded-lg border-2 p-4"
              id="content"
              rows="6"
              value={state.content}
              onChange={(e) => handleInputChange("content", e.target.value)}
            />
            {state.errors.content && (
              <p className="mt-1 text-center text-xs text-error">
                Content is required
              </p>
            )}
          </Modal.Body>
          <Button
            className="focus:ring-blue-300 text-black mx-auto mb-4 mt-4 flex w-1/2 justify-center rounded bg-lightGray px-4 py-2 font-bold shadow-lg transition duration-150 ease-in-out hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-opacity-50"
            type="submit"
          >
            Create Note
          </Button>
        </form>
      </Modal>
    </>
  )
}

export default NewModal
