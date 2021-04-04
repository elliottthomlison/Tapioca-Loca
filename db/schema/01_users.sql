-- Drop and recreate Users table (Example)
-- # Users
-- id SERIAL PK
-- name VARCHAR(55)
-- phone_number VARCHAR(55)
-- password VARCHAR(55)
-- type VARCHAR(55) (customer, owner, employee)
-- member_since DATE



DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  phone_number VARCHAR(55) NOT NULL,
  password VARCHAR(55) NOT NULL,
  type VARCHAR(55) DEFAULT 'customer',
  member_since DATE DEFAULT getdate()
);
