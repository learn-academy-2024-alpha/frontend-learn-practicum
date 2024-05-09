import React, { useState } from "react"
import { useForm } from "react-hook-form"
import logInAndSignUP from "../utilities/loginAndSignUp.js"

const SignUp = ({ setFormStatus, signedInUser }) => {
  const [error, setError] = useState(false)

  const preloadedValues = {
    email: "test1@example.com",
    username: "test1",
    password: "password",
    password_confirmation: "password"
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    logInAndSignUP({ user: formData }, "signup").then((data) => {
      data === "Error: invalid credentials"
        ? setError(true)
        : signedInUser(data)
    })
  }

  return (
    <div className="mt-10 h-[calc(100vh-180px)] overflow-hidden">
      <div>
        <h3 className="my-4 text-center text-xl">Create an Account</h3>
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
              <label htmlFor="email">Create a Username</label>
            </div>
            <input
              id="username"
              type="text"
              placeholder="Username"
              className="block rounded border border-lightGray p-1"
              {...register("username", { required: true })}
            />
            {errors.username && (
              <span className="text-error">Email is required</span>
            )}
          </div>
          <div>
            <div className="mb-2">
              <label htmlFor="password">Create a Password</label>
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
          <div>
            <div className="mb-2">
              <label htmlFor="password">Confirm Your Password</label>
            </div>
            <input
              id="password_confirmation"
              type="password"
              placeholder="Password"
              className="block rounded border border-lightGray p-1"
              {...register("password_confirmation", { required: true })}
            />
            {errors.password_confirmation && (
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
            onClick={() => setFormStatus("signIn")}
            className="underline"
          >
            Already have an account?
          </button>
        </form>
      </div>
      {error && (
        <div className="py-4 text-center">
          <span className="text-error">Invalid user, try again</span>
        </div>
      )}
    </div>
  )
}

export default SignUp
