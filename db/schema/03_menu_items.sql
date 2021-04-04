-- # menu_items
-- id SERIAL PK
-- name VARCHAR(55)
-- bill_time_minutes INTEGER
-- price_cents INTEGER
-- stock INTEGER


DROP TABLE IF EXISTS menu_items CASCADE;
CREATE TABLE menu_items (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(55) NOT NULL,
  bill_time_minutes INTEGER NOT NULL DEFAULT 10,
  price_cents INTEGER NOT NULL,
  stock INTEGER NOT NULL DEFAULT 0,
)
