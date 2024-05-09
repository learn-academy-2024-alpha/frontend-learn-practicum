const logInAndSignUP = async (formData, endpoint) => {
  const developmentURL = "http://localhost:3000"

  try {
    const signInResponse = await fetch(`${developmentURL}/${endpoint}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
    if (!signInResponse.ok) throw new Error("invalid credentials")
    const payload = await signInResponse.json()

    localStorage.setItem("user", JSON.stringify(payload))
    localStorage.setItem("token", signInResponse.headers.get("Authorization"))
    return payload
  } catch (error) {
    return "Error: invalid credentials"
  }
}

export default logInAndSignUP
