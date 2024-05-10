import React from "react"
import { Button, Modal, Radio, Label, TextInput } from "flowbite-react"
import { useState } from "react"
import edit from "../assets/edit.png"

const NewModal = () => {
  const [openModal, setOpenModal] = useState(true)

  return (
    <>
      <button onClick={() => setOpenModal(true)}>
        <img
          src={edit}
          alt="black graphic of a notepad"
          className="mx-4 my-2 h-7"
        />
      </button>
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>New Note</Modal.Header>
        <form>
          <fieldset className="flex max-w-md flex-col gap-4">
            <legend className="mb-4">Make Note Public or Private</legend>
            <div className="flex items-center gap-2">
              <Radio id="public" name="public" value="public" defaultChecked />
              <Label htmlFor="public">Public</Label>
            </div>
            <div className="flex items-center gap-2">
              <Radio id="private" name="public" value="public" />
              <Label htmlFor="private">Private</Label>
            </div>
          </fieldset>
          <Modal.Body>
            <div className="flex max-w-md flex-col gap-4">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="Title" />
                </div>
                <TextInput id="title" type="text" sizing="md" />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="content" value="Content" />
                </div>
                <TextInput id="content" type="text" sizing="lg" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default NewModal
