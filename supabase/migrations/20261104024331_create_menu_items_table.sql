/*
# Create menu_items table

1. New Tables
- `menu_items`
  - `id` (int, primary key, identity)
  - `category` (text) — lunch / dinner / dessert / seasonal
  - `section` (text) — 小皿料理 / 冷前菜 / 温前菜 / パン / ピザ / パスタ / メイン料理 / デザート / コース
  - `name` (text) — 料理名
  - `price` (text) — 価格表示（税込）
  - `description` (text) — 料理の説明
  - `sort_order` (int) — 表示順
  - `created_at` (timestamptz)

2. Security
- Enable RLS on `menu_items`.
- Grant SELECT to `anon, authenticated` so the public site can read.
- Allow anon + authenticated SELECT only (public data).
- Grant INSERT, UPDATE, DELETE to `authenticated` for admin editing.
*/

CREATE TABLE IF NOT EXISTS menu_items (
  id int PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  category text NOT NULL DEFAULT 'dinner',
  section text NOT NULL DEFAULT '',
  name text NOT NULL DEFAULT '',
  price text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  sort_order int NOT NULL DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE menu_items ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON menu_items TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON menu_items TO authenticated;

DROP POLICY IF EXISTS "anon_select_menu_items" ON menu_items;
CREATE POLICY "anon_select_menu_items" ON menu_items FOR SELECT
  TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_menu_items" ON menu_items;
CREATE POLICY "authenticated_insert_menu_items" ON menu_items FOR INSERT
  TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_menu_items" ON menu_items;
CREATE POLICY "authenticated_update_menu_items" ON menu_items FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_menu_items" ON menu_items;
CREATE POLICY "authenticated_delete_menu_items" ON menu_items FOR DELETE
  TO authenticated USING (true);
