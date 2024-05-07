import React, { useState } from "react"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Landing = ({ signIn, user }) => {
  const [formStatus, setFormStatus] = useState("signIn")
  return (
    <>
      {formStatus === "signIn" && (
        <SignIn setFormStatus={setFormStatus} signIn={signIn} user={user} />
      )}
      {formStatus === "signUp" && <SignUp setFormStatus={setFormStatus} />}
    </>
  )
}

export default Landing
