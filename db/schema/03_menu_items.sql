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
  photo TEXT NOT NULL DEFAULT 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2016%2F04%2Ftaro-bubble-tea-XL-RECIPE0316.jpg&q=85'
);
