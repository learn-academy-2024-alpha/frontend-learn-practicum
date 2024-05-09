import React, { useState } from "react"
import { useForm } from "react-hook-form"
import logInAndSignUP from "../utilities/loginAndSignUp.js"

const SignIn = ({ setFormStatus, signedInUser }) => {
  const [error, setError] = useState(false)

  const preloadedValues = {
    email: "audrie@ledner.test",
    password: "2irDk1q8y778Id"
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    logInAndSignUP({ user: formData }, "login").then((data) => {
      data === "Error: invalid credentials"
        ? setError(true)
        : signedInUser(data)
    })
  }

  return (
    <>
      <div>
        <h3 className="my-8 text-center text-xl">Sign In</h3>
      </div>
      <div className="flex justify-center">
        <form
          className="flex max-w-md flex-col justify-center gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <div className="mb-2">
              <label htmlFor="email">Enter Your Email</label>
            </div>
            <input
              id="email"
              type="email"
              placeholder="Email"
              className="block rounded border border-lightGray p-1"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-error">Email is required</span>
            )}
          </div>
          <div>
            <div className="mb-2">
              <label htmlFor="password">Enter Your Password</label>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Password"
              className="block rounded border border-lightGray p-1"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <span className="text-error">Password is required</span>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="rounded border bg-lightGray p-1 hover:bg-white"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setFormStatus("signUp")}
            className="underline"
          >
            Make an account
          </button>
        </form>
      </div>
      {error && (
        <div className="py-4 text-center">
          <span className="text-error">Invalid user, try again</span>
        </div>
      )}
    </>
  )
}

export default SignIn
