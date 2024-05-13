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
      dispatch({ type: "TOGGLE_MODAL" }) // Close modal on successful submission
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
        show={state.openModal}
        onClose={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        <Modal.Header>New Note</Modal.Header>
        <form onSubmit={handleFormSubmit}>
          <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="mb-4">Make Note Public or Private</legend>
            <div className="flex items-center gap-2">
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
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput
                  id="title"
                  type="text"
                  sizing="md"
                  value={state.title}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                />
                {state.errors.title && (
                  <div className="text-error">Title is required</div>
                )}
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="content" value="Content" />
                </div>
                <TextInput
                  id="content"
                  type="text"
                  sizing="lg"
                  value={state.content}
                  onChange={(e) => handleInputChange("content", e.target.value)}
                />
                {state.errors.content && (
                  <div className="text-error">Content is required</div>
                )}
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit">Create Note</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default NewModal
