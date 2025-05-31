'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleRegister = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.auth.signUp({ email, password })
    if (error) alert(error.message)
    else {
      alert('Check your email to confirm registration.')
      router.push('/login')
    }
  }

  return (
    <form onSubmit={handleRegister} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl">Register</h2>
      <input className="border p-2 w-full" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white p-2 w-full" type="submit">Register</button>
    </form>
  )
}
