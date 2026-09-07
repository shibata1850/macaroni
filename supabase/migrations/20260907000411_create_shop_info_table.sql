/*
# Create shop_info table for CMS-managed calendar/hours/parking

1. New Tables
- `shop_info` — single-row table holding the editable shop information shown on the Access page.
  - `id` (int, primary key, always 1) — singleton row.
  - `calendar_text` (text) — 営業カレンダーのテキスト情報（月ごとの営業日など）.
  - `hours_text` (text) — 営業時間のテキスト.
  - `parking_text` (text) — 駐車場案内のテキスト.
  - `holidays_text` (text) — 定休日・休業日情報.
  - `updated_at` (timestamptz) — 最終更新日時.

2. Security
- Enable RLS on `shop_info`.
- SELECT: anyone (anon + authenticated) can read — the info is public.
- INSERT/UPDATE/DELETE: only authenticated users (the shop owner) can modify.
- A seed row with id=1 is inserted with default empty strings.

3. Notes
- This is a singleton table (only one row, id=1) because the shop has one set of info.
- The owner logs in via Supabase email/password auth to edit.
*/

CREATE TABLE IF NOT EXISTS shop_info (
  id int PRIMARY KEY DEFAULT 1 CHECK (id = 1),
  calendar_text text NOT NULL DEFAULT '',
  hours_text text NOT NULL DEFAULT '',
  parking_text text NOT NULL DEFAULT '',
  holidays_text text NOT NULL DEFAULT '',
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE shop_info ENABLE ROW LEVEL SECURITY;

-- Seed the singleton row if it doesn't exist
INSERT INTO shop_info (id, calendar_text, hours_text, parking_text, holidays_text)
VALUES (1, '', '', '', '')
ON CONFLICT (id) DO NOTHING;

-- Public read
DROP POLICY IF EXISTS "public_read_shop_info" ON shop_info;
CREATE POLICY "public_read_shop_info"
ON shop_info FOR SELECT
TO anon, authenticated USING (true);

-- Only authenticated users can insert
DROP POLICY IF EXISTS "auth_insert_shop_info" ON shop_info;
CREATE POLICY "auth_insert_shop_info"
ON shop_info FOR INSERT
TO authenticated WITH CHECK (true);

-- Only authenticated users can update
DROP POLICY IF EXISTS "auth_update_shop_info" ON shop_info;
CREATE POLICY "auth_update_shop_info"
ON shop_info FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users can delete
DROP POLICY IF EXISTS "auth_delete_shop_info" ON shop_info;
CREATE POLICY "auth_delete_shop_info"
ON shop_info FOR DELETE
TO authenticated USING (true);
