'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setMessage('')
    setError('')
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/update-password'
    })
    if (error) setError(error.message)
    else setMessage('შეამოწმეთ ელფოსტა პაროლის აღსადგენად')
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
      <h2 className="text-xl">პაროლის აღდგენა</h2>
      <input
        className="border p-2 w-full"
        type="email"
        placeholder="შეიყვანე ელფოსტა"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="bg-blue-600 text-white p-2 w-full" type="submit">
        გაგზავნე ბმული
      </button>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </form>
  )
}
