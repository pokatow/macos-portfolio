import React, { useRef } from 'react'

interface LoginProps {
  login: Function
  error: String
}

const Login = (props: LoginProps) => {
  const birthDate = useRef<HTMLInputElement>(null)
  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    props.login(birthDate.current!.value)
  }
  return (
    <form
      onSubmit={formSubmitHandler}
      className="flex flex-col gap-4 p-4 border border-black"
    >
      <div className="flex flex-col gap-2 text-left w-80">
        <label htmlFor="birthdate" className="font-semibold">
          Your Birthdate
        </label>
        <input
          type="date"
          ref={birthDate}
          className="p-2 border border-black bg-gray-50"
        />
        {props.error && <p className="text-red-400">{props.error}</p>}
      </div>
      <button className="px-2 py-1 border border-black" type="submit">
        View Letter
      </button>
    </form>
  )
}

export default Login
