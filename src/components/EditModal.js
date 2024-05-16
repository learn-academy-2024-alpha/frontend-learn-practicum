import React, { useReducer } from "react"
import { useForm } from "react-hook-form"
import { Button, Modal, Radio, Label, TextInput } from "flowbite-react"
import Edit from "../assets/edit.png"

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

const EditModal = ({ updateNote, user, selectedNote }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const preloadedValues = {
    title: selectedNote?.title,
    content: selectedNote?.content,
    public: selectedNote?.public
  }

  const handleInputChange = (field, value) => {
    dispatch({ type: "SET_FIELD", field, value })
    if (state.errors[field]) {
      dispatch({ type: "SET_ERROR", field, value: false })
    }
  }

  const { register, handleSubmit } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (data) => {
    updateNote({
      ...data,
      id: selectedNote.id
    })
    dispatch({ type: "TOGGLE_MODAL" })
  }

  return (
    <>
      {selectedNote?.creator === user?.id && (
        <button onClick={() => dispatch({ type: "TOGGLE_MODAL" })}>
          <img
            src={Edit}
            alt="pencil icon for editing notes"
            className="mx-4 my-2 h-7"
          />
        </button>
      )}
      <Modal
        className="m-auto h-4/5 w-1/2 bg-gray "
        show={state.openModal}
        onClose={() => dispatch({ type: "TOGGLE_MODAL" })}
      >
        <Modal.Header className="m-3 text-xl font-semibold"></Modal.Header>
        <h1 className="mb-3 text-center text-3xl font-semibold">
          <u>Note Settings</u>
        </h1>
        <h2 className="text-center font-semibold">Update Note Privacy</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className=" p-2">
            <div className="flex justify-center gap-4">
              <Radio
                id="public"
                name="public"
                value="true"
                checked={state.public}
                onChange={() => handleInputChange("public", true)}
                {...register("public", { required: true })}
              />
              <Label htmlFor="public">Public</Label>
              <Radio
                id="private"
                name="public"
                value="false"
                checked={!state.public}
                onChange={() => handleInputChange("public", false)}
                {...register("public", { required: true })}
              />
              <Label htmlFor="private">Private</Label>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                type="submit"
                className="focus:ring-blue-300 text-black mx-auto mb-4 mt-4 flex w-1/2 justify-center rounded bg-lightGray px-4 py-2 font-bold shadow-lg transition duration-150 ease-in-out hover:bg-neutral focus:outline-none focus:ring-4 focus:ring-opacity-50"
              >
                Save
              </Button>
            </div>
          </fieldset>
        </form>
      </Modal>
    </>
  )
}

export default EditModal
