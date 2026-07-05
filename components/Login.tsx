'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

const Login = () => {

    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <section className='flex justify-between'>
            <Link href='/' className='m-2'>
                Jhalar
            </Link>
            <div className='flex m-2'>
                <Link href='/about' className='px-2 my-1'>About </Link>
                <Link href='/contact' className='px-2 my-1'>Contact </Link>
                <button className='px-2' onClick={() => signOut({ callbackUrl: "/" })} > Signout </button>
            </div>
            </section>

        )
    }
    return (
        <div className='flex justify-end m-2'>
            <button onClick={() => signIn('google')} > Signin </button>
        </div>
    )
}

export default Login
