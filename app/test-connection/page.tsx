'use client'
import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabaseClient'

export default function TestConnection() {
  const [status, setStatus] = useState('მიმდინარეობს შემოწმება...')

  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) {
        setStatus('❌ Supabase კავშირი ვერ ხერხდება')
      } else {
        setStatus('✅ წარმატებული კავშირი Supabase-თან')
      }
    })
  }, [])

  return (
    <div className="p-8 text-lg text-center">
      <p>{status}</p>
    </div>
  )
}
