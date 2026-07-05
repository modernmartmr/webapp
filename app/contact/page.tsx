'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MouseEvent } from 'react'

interface User {
  username: string;
  mobile: string;
  email: string;
  desc: string;
}

const Contact = () => {
  const router = useRouter()
  const [user, setUser] = useState<User>({ username: '', mobile: '', email: '', desc: '' })
  const setUserData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target 
    setUser({ ...user, [name]: value })
  }
  const sendData = async function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    try{
      const response = await fetch('/api/ledata', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: user.username,
          mobile: user.mobile,
          email: user.email,
          desc: user.desc
        })
      })
     
      const result = await response.json()
      console.log(result);
      if (response.ok) {
  router.push('/')
} else {
  console.error(result)
  // show an error to the user
}
    }
      
    }
    catch(error){
      console.log(error,'anha')
    }

  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 py-12">
      <form
        onSubmit={sendData}
        className="flex flex-col gap-5 w-full max-w-md rounded-2xl bg-white p-8 shadow-lg shadow-slate-200/70 border border-slate-100"
      >
        <div className="text-center mb-1">
          <h1 className="text-2xl font-semibold text-slate-800">
            Get in touch
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Tell us what's going on and we'll get back to you.
          </p>
        </div>
 
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">
            Username
          </span>
          <input
            className="h-11 rounded-lg border border-slate-300 px-3 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            type="text"
            name="username"
            value={user.username}
            onChange={setUserData}
            placeholder="Your name"
            required
          />
        </label>
 
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">
            Contact number
          </span>
          <input
            className="h-11 rounded-lg border border-slate-300 px-3 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            type="tel"
            inputMode="numeric"
            pattern="[0-9]{7,15}"
            name="mobile"
            value={user.mobile}
            onChange={setUserData}
            placeholder="0000000000"
            required
          />
        </label>
 
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">
            Email address
          </span>
          <input
            className="h-11 rounded-lg border border-slate-300 px-3 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            type="email"
            name="email"
            value={user.email}
            onChange={setUserData}
            placeholder="you@example.com"
            required
          />
        </label>
 
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-700">
            Describe your issue
          </span>
          <textarea
            className="rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 resize-none"
            rows={4}
            name="desc"
            value={user.desc}
            onChange={setUserData}
            placeholder="What happened, and when did it start?"
            required
          />
        </label>
 
        <button
          className="mt-2 h-11 rounded-lg bg-indigo-600 text-white font-medium text-base transition hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>  
  )
}

export default Contact
