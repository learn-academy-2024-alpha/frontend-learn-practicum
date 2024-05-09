import React, { useState } from "react"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Landing = ({ signedInUser }) => {
  const [formStatus, setFormStatus] = useState("signIn")
  return (
    <>
      {formStatus === "signIn" && (
        <SignIn setFormStatus={setFormStatus} signedInUser={signedInUser} />
      )}
      {formStatus === "signUp" && (
        <SignUp setFormStatus={setFormStatus} signedInUser={signedInUser} />
      )}
    </>
  )
}

export default Landing
