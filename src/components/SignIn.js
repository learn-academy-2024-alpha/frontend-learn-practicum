import { useForm } from "react-hook-form"

const SignIn = ({ setFormStatus, signIn, user }) => {
  const preloadedValues = {
    email: "anita.ullrich@jerde-reinger.example",
    password: "uSto8Cpy"
  }
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: preloadedValues })

  const onSubmit = (formData) => {
    signIn({ user: formData })
  }

  return (
    <div className="mt-10 h-[calc(100vh-180px)]">
      <div>
        <h3 className="text-center text-xl my-4">Sign In</h3>
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
              <label htmlFor="password">Enter Your Password</label>
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
          <button
            type="submit"
            onClick={handleSubmit}
            className="border p-1 rounded bg-lightGray hover:bg-white"
          >
            Submit
          </button>
          <button
            type="submit"
            onClick={() => setFormStatus("signUp")}
            className="underline"
          >
            Make an account
          </button>
        </form>
        {user === "invalid" && (
          <div>
            <span className="text-error">Invalid user, try again</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default SignIn
