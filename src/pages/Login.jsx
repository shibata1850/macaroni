import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase.js'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState('signin')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
        setError('アカウントを作成しました。ログインしてください。')
        setMode('signin')
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      }
    } catch (err) {
      setError(err.message || 'エラーが発生しました')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="page" id="page-login">
      <div className="cms-login-wrap">
        <div className="cms-login-card">
          <h1 className="cms-login-title">
            macaroni<span className="brand-dot-en">.</span>
          </h1>
          <p className="cms-login-subtitle">
            {mode === 'signin' ? '管理者ログイン' : 'アカウント作成'}
          </p>

          {error && <p className="cms-error">{error}</p>}

          <form onSubmit={handleSubmit} className="cms-form">
            <label className="cms-field">
              <span>メールアドレス</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </label>
            <label className="cms-field">
              <span>パスワード</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
              />
            </label>
            <button type="submit" className="cms-submit" disabled={loading}>
              {loading ? '処理中…' : mode === 'signin' ? 'ログイン' : '登録'}
            </button>
          </form>

          <button
            className="cms-mode-switch"
            onClick={() => {
              setMode(mode === 'signin' ? 'signup' : 'signin')
              setError('')
            }}
          >
            {mode === 'signin'
              ? '初めての方はこちら（アカウント作成）'
              : 'ログイン画面に戻る'}
          </button>
        </div>
      </div>
    </section>
  )
}
