import React, { useState } from "react"
import SignIn from "../components/SignIn"
import SignUp from "../components/SignUp"

const Landing = () => {
  const [formStatus, setFormStatus] = useState("signIn")
  return (
    <>
      {formStatus === "signIn" && <SignIn setFormStatus={setFormStatus} />}
      {formStatus === "signUp" && <SignUp setFormStatus={setFormStatus} />}
    </>
  )
}

export default Landing
