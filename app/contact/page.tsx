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
  const sendData = async function (e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try{
      const response = await fetch('/api/ledata', {
        method: 'POST',
        body: JSON.stringify({
          username: user.username,
          mobile: user.mobile,
          email: user.email,
          desc: user.desc
        })
      })
     
      const result = await response.json()
      console.log(result);
      if(result) {
        router.push('/')  
    }
      
    }
    catch(error){
      console.log(error,'anha')
    }

  }

  return (
    <form className= 'flex flex-col items-center text-center rounded-lg'>
      <input className='flex-1 h-10 text-2xl leading-relaxed placeholder:blue bg-gradient-to-r from-indigo via-purple-to-pink placeholder:text-center' type='text' name='username' value={user.username} onChange={setUserData} placeholder='Username' required />
      <input className='flex-1 h-10 text-2xl leading-relaxed placeholder:blue bg-gradient-to-r from-indigo via-purple to-pink placeholder:text-center' type='number' name='mobile' value={user.mobile} onChange={setUserData} placeholder='Contact Number'required />
      <input className='flex-1 h-10 text-2xl leading-relaxed placeholder:blue bg-gradient-to-r from-indigo via-purple to-pink placeholder:text-center' type='email' name='email' value={user.email} onChange={setUserData} placeholder='Email Address' required/>
      <textarea rows={2} className='flex-1 h-15 leading-relaxed text-2xl my-1 text-green placeholder:text-center' name='desc' value={user.desc} onChange={setUserData} placeholder='Describe Issue' required/>
      <button className='flex-1 h-10 mx-auto leading-relaxed text-2xl p-1 text-blue w-1/4 text-center rounded-lg bg-silver ' onClick={sendData}  type='submit'>Submit</button>
    </form>
  )
}

export default Contact
