'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleLogin = async (e: any) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) alert(error.message)
    else router.push('/protected')
  }

  return (
    <form onSubmit={handleLogin} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl">Login</h2>
      <input className="border p-2 w-full" type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input className="border p-2 w-full" type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button className="bg-green-600 text-white p-2 w-full" type="submit">Login</button>
    </form>
  )
}
