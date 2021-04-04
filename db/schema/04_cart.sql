-- # Cart
-- id SERIAL PK
-- item_name FK items.name
-- item_price_cents FK items.price_cents
-- item_bill_time FK items.bill_time_minutes

-- CREATE TABLE menu_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(55) NOT NULL,
--   bill_time_minutes INTEGER NOT NULL DEFAULT 1,
--   price_cents INTEGER NOT NULL,
--   stock INTEGER NOT NULL DEFAULT 0,
-- )

-- DROP TABLE IF EXISTS cart CASCADE;
CREATE TABLE cart (
  id SERIAL PRIMARY KEY NOT NULL,
  CONSTRAINT fk_item_name FOREIGN KEY(item_name) REFERENCES menu_items(name),
  FOREIGN KEY (item_bill_time) REFERENCES menu_items(bill_time_minutes),
  FOREIGN KEY (item_price_cents) REFERENCES menu_items(price_cents),
  FOREIGN KEY (stock) REFERENCES menu_items(stock)
);

