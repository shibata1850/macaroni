import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase.js'

export default function Admin() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    calendar_text: '',
    hours_text: '',
    parking_text: '',
    holidays_text: '',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const loadData = useCallback(async () => {
    setLoading(true)
    const { data, error } = await supabase
      .from('shop_info')
      .select('calendar_text, hours_text, parking_text, holidays_text')
      .eq('id', 1)
      .maybeSingle()

    if (error) {
      setError('データの読み込みに失敗しました')
    } else if (data) {
      setFormData({
        calendar_text: data.calendar_text || '',
        hours_text: data.hours_text || '',
        parking_text: data.parking_text || '',
        holidays_text: data.holidays_text || '',
      })
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    loadData()
  }, [loadData])

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setMessage('')
    setError('')

    const { error } = await supabase
      .from('shop_info')
      .update({
        calendar_text: formData.calendar_text,
        hours_text: formData.hours_text,
        parking_text: formData.parking_text,
        holidays_text: formData.holidays_text,
        updated_at: new Date().toISOString(),
      })
      .eq('id', 1)

    if (error) {
      setError('保存に失敗しました。ログイン状態を確認してください。')
    } else {
      setMessage('保存しました')
    }
    setSaving(false)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  if (loading) {
    return (
      <section className="page" id="page-admin">
        <div className="cms-admin-wrap">
          <p>読み込み中…</p>
        </div>
      </section>
    )
  }

  return (
    <section className="page" id="page-admin">
      <div className="cms-admin-wrap">
        <div className="cms-admin-header">
          <div className="cms-admin-title">
            <img src="/images/logo.png" alt="macaroni." />
            <span>管理画面</span>
          </div>
          <button className="cms-logout" onClick={handleSignOut}>
            ログアウト
          </button>
        </div>

        {message && <p className="cms-success">{message}</p>}
        {error && <p className="cms-error">{error}</p>}

        <form onSubmit={handleSave} className="cms-admin-form">
          <label className="cms-admin-field">
            <span className="cms-field-label">営業カレンダー</span>
            <textarea
              value={formData.calendar_text}
              onChange={(e) => handleChange('calendar_text', e.target.value)}
              rows={8}
              placeholder="例：&#10;9月の営業日&#10;月・火・水・木・金・土 11:30〜15:00 / 17:30〜22:00&#10;日曜定休"
            />
          </label>

          <label className="cms-admin-field">
            <span className="cms-field-label">営業時間</span>
            <textarea
              value={formData.hours_text}
              onChange={(e) => handleChange('hours_text', e.target.value)}
              rows={4}
              placeholder="例：&#10;ランチ 11:30〜15:00 (L.O. 14:00)&#10;ディナー 17:30〜22:00 (L.O. 21:00)"
            />
          </label>

          <label className="cms-admin-field">
            <span className="cms-field-label">定休日・休業日</span>
            <textarea
              value={formData.holidays_text}
              onChange={(e) => handleChange('holidays_text', e.target.value)}
              rows={3}
              placeholder="例：毎週日曜日・第3月曜日"
            />
          </label>

          <label className="cms-admin-field">
            <span className="cms-field-label">駐車場案内</span>
            <textarea
              value={formData.parking_text}
              onChange={(e) => handleChange('parking_text', e.target.value)}
              rows={3}
              placeholder="例：店舗前に3台分の専用駐車場あり"
            />
          </label>

          <button type="submit" className="cms-submit" disabled={saving}>
            {saving ? '保存中…' : '保存する'}
          </button>
        </form>
      </div>
    </section>
  )
}
