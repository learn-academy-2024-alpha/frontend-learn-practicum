import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { useFetch } from "../utilities/useFetch"

const SignIn = ({ setFormStatus }) => {
  const [userLogin, setUserLogin] = useState(null)
  const [submitted, setSubmitted] = useState(false)
  const { data, loading } = useFetch(userLogin, "login", "POST", "/dashboard")

  const preloadedValues = {
    email: "anita.ullrich@jerde-reinger.example",
    password: "uSto8Cpy"
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData, e) => {
    e.preventDefault()
    setUserLogin({ user: formData })
    setSubmitted(true)
  }

  return (
    <div className="mt-10 h-[calc(100vh-180px)] overflow-hidden">
      <div>
        <h3 className="my-4 text-center text-xl">Sign In</h3>
      </div>
      <div className="py-4 text-center">
        {loading && <span>Loading...</span>}
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
      {submitted && !data && (
        <div className="py-4 text-center">
          <span className="text-error">Invalid user, try again</span>
        </div>
      )}
    </div>
  )
}

export default SignIn
