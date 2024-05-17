import React, { useEffect, useReducer, useState } from "react"
import { useForm } from "react-hook-form"
import { Button, Modal, Radio, Label, TextInput, Select } from "flowbite-react"
import Edit from "../assets/edit.png"

const EditModal = ({ user, selectedNotePublic, selectedNote }) => {
  const [openModal, setOpenModal] = useState(false)
  const [isPublic, setIsPublic] = useState()
  // const [isPrivate, setIsPrivate] = useState()
  console.log(selectedNote?.public)
  const handleInputChange = (value) => {
    if (value) {
      setIsPublic(true)
      // setIsPrivate(false)
    } else {
      setIsPublic(false)
      // setIsPrivate(true)
    }
  }
  const { handleSubmit } = useForm()
  const id = selectedNote?.id

  const updateNote = async (updatedNote, id) => {
    try {
      const patchResponse = await fetch(`http://localhost:3000/notes/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedNote)
      })
      if (!patchResponse.ok) {
        throw new Error("Server responded with status: " + patchResponse.status)
      }
      await patchResponse.json()
    } catch (error) {
      console.error("Error in updateNote:", error)
      alert("Oops something went wrong: " + error.message)
    }
  }
  console.log(selectedNotePublic)

  const onSubmit = (data) => {
    updateNote(
      {
        Public: data
      },
      id
    )
    console.log(data)
    setOpenModal(false)
  }
  return (
    <>
      {selectedNote?.creator === user?.id && (
        <button onClick={() => setOpenModal(true)}>
          <img
            src={Edit}
            alt="pencil icon for editing notes"
            className="mx-4 my-2 h-7"
          />
        </button>
      )}
      <Modal
        className="m-auto h-4/5 w-1/2 bg-gray "
        show={openModal}
        onClose={() => setOpenModal(false)}
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
                value={selectedNote?.public === true}
                // checked={selectedNote?.public}
                onChange={() => handleInputChange(true)}
                // {...register("public", { required: true })}
              />
              <Label htmlFor="public">Public</Label>
              <Radio
                id="private"
                name="public"
                value={selectedNote?.public === false}
                // checked={!selectedNote?.public}
                onChange={() => handleInputChange(false)}
                // {...register("public", { required: true })}
              />
              <Label htmlFor="private">Private</Label>
            </div>
            {/* <div className="flex w-full justify-center pt-1">
              <Select
                className="flex w-1/2"
                value={selectedNote?.public}
                onChange={}
              >
                <option className="text-center" value={true}>
                  Public
                </option>
                <option className="text-center" value={false}>
                  Private
                </option>
              </Select>
            </div> */}
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
