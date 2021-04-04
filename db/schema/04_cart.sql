-- # Cart
-- id SERIAL PK
-- item_name FK items.name
-- item_price_cents FK items.price_cents
-- item_bill_time FK items.bill_time_minutes

-- CREATE TABLE Menu_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(55) NOT NULL,
--   bill_time_minutes INTEGER NOT NULL DEFAULT 1,
--   price_cents INTEGER NOT NULL,
--   stock INTEGER NOT NULL DEFAULT 0,
-- )

DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
  id SERIAL PRIMARY KEY NOT NULL,
  item_name VARCHAR(55) FOREIGN KEY REFERENCES menu_items(name),
  item_bill_time INTEGER FOREIGN KEY REFERENCES menu_items(bill_time_minutes),
  item_price_cents INTEGER FOREIGN KEY REFERENCES menu_items(price_cents),
  stock INTEGER FOREIGN KEY REFERENCES menu_items(stock)
);

