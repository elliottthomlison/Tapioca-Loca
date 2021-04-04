-- DROP TABLE IF EXISTS Menu_items CASCADE;
-- CREATE TABLE Menu_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(55) NOT NULL,
--   bill_time_minutes INTEGER NOT NULL DEFAULT 1,
--   price_cents INTEGER NOT NULL,
--   stock INTEGER NOT NULL DEFAULT 0,
-- )

INSERT INTO Menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock
  ) VALUES (
    'Thai Tea'
    5,
    699,
    100
  );

  INSERT INTO Menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock
  ) VALUES (
    'Green Tea',
    4,
    599,
    100
  );

  INSERT INTO Menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock
  ) VALUES (
    'Black Tea',
    4,
    650,
    100
  );

  INSERT INTO Menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock
  ) VALUES (
    'Berry Tea',
    5,
    699,
    50
  );

  INSERT INTO Menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock
  ) VALUES (
    'Rare Tea',
    10,
    1099,
    0
  );
