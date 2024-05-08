import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useFetch } from "../utilities/useFetch"

const SignUp = ({ setFormStatus }) => {
  const [userSignUp, setUserSignUp] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const { data, loading } = useFetch(userSignUp, "signup", "POST")

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

  const onSubmit = (formData, e) => {
    e.preventDefault()
    setUserSignUp({ user: formData })
    setSubmitted(true)
  }

  return (
    <div className="mt-10 h-[calc(100vh-180px)] overflow-hidden">
      <div>
        <h3 className="text-center text-xl my-4">Create an Account</h3>
      </div>
      <div className="text-center py-4">
        {loading && <span>Loading...</span>}
      </div>
      <div className="flex justify-center">
        <form
          className="flex max-w-md flex-col gap-4 justify-center"
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
              className="border p-1 rounded border-lightGray block"
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
              className="border p-1 rounded border-lightGray block"
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
              className="border p-1 rounded border-lightGray block"
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
              className="border p-1 rounded border-lightGray block"
              {...register("password_confirmation", { required: true })}
            />
            {errors.password_confirmation && (
              <span className="text-error">Password is required</span>
            )}
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="border p-1 rounded bg-lightGray hover:bg-white"
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
      {submitted && !data && (
        <div className="text-center py-4">
          <span className="text-error">Something went wrong, try again</span>
        </div>
      )}
    </div>
  )
}

export default SignUp
