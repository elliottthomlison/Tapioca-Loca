-- DROP TABLE IF EXISTS Menu_items CASCADE;
-- CREATE TABLE Menu_items (
--   id SERIAL PRIMARY KEY NOT NULL,
--   name VARCHAR(55) NOT NULL,
--   bill_time_minutes INTEGER NOT NULL DEFAULT 1,
--   price_cents INTEGER NOT NULL,
--   stock INTEGER NOT NULL DEFAULT 0,
-- )

INSERT INTO menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock,
  photo
  ) VALUES (
    'Thai Tea',
    5,
    6.99,
    100,
    '/tea_images/6_milktea_pudding.png'
  );

  INSERT INTO menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock,
  photo
  ) VALUES (
    'Green Tea',
    4,
    5.99,
    100,
    '/tea_images/1_alishan.png'
  );

  INSERT INTO menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock,
  photo
  ) VALUES (
    'Black Tea',
    4,
    6.50,
    100,
    '/tea_images/2_blacktea.png'
  );

  INSERT INTO menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock,
  photo
  ) VALUES (
    'Berry Tea',
    5,
    6.99,
    50,
    '/tea_images/4_kumquat.png'
  );

  INSERT INTO menu_items (
  name,
  bill_time_minutes,
  price_cents,
  stock,
  photo
  ) VALUES (
    'Rare Tea',
    10,
    10.99,
    0,
    '/tea_images/5_tapioca.png'
  );
