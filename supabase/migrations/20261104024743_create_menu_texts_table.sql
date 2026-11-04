/*
# Create menu_texts table for raw layout-preserving menu content

1. New Tables
- `menu_texts`
  - `id` (int, primary key, identity)
  - `category` (text, unique) — lunch / dinner / dessert / seasonal
  - `body` (text) — 元のWordファイルの文字レイアウトそのまま
  - `updated_at` (timestamptz)

2. Security
- Enable RLS on `menu_texts`.
- Grant SELECT to `anon, authenticated` (public read).
- Grant INSERT, UPDATE, DELETE to `authenticated` (admin edit).
*/

CREATE TABLE IF NOT EXISTS menu_texts (
  id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category text UNIQUE NOT NULL,
  body text NOT NULL DEFAULT '',
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE menu_texts ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON menu_texts TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON menu_texts TO authenticated;

DROP POLICY IF EXISTS "anon_select_menu_texts" ON menu_texts;
CREATE POLICY "anon_select_menu_texts" ON menu_texts FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_menu_texts" ON menu_texts;
CREATE POLICY "authenticated_insert_menu_texts" ON menu_texts FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_menu_texts" ON menu_texts;
CREATE POLICY "authenticated_update_menu_texts" ON menu_texts FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_menu_texts" ON menu_texts;
CREATE POLICY "authenticated_delete_menu_texts" ON menu_texts FOR DELETE
  TO authenticated USING (true);
