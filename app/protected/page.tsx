'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import { useRouter } from 'next/navigation'

export default function ProtectedPage() {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) router.push('/login')
      else {
        setUser(user)
        setLoading(false)
      }
    })
  }, [router])

  if (loading) return <p>Loading...</p>

  return (
    <div className="p-4">
      <h2 className="text-xl mb-2">Protected Page</h2>
      <p>Welcome, {user.email}</p>
    </div>
  )
}
