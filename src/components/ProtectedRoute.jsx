import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

export default function ProtectedRoute({ children }) {
  const [authState, setAuthState] = useState({
    loading: true,
    session: null,
  })

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthState({ loading: false, session })
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setAuthState({ loading: false, session })
    })

    return () => subscription.unsubscribe()
  }, [])

  if (authState.loading) {
    return (
      <section className="page">
        <div className="cms-login-wrap">
          <p>確認中…</p>
        </div>
      </section>
    )
  }

  if (!authState.session) {
    return <Navigate to="/login" replace />
  }

  return children
}
