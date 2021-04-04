-- Users table seeds here (Example)
-- # Users
-- id SERIAL PK
-- name VARCHAR(55)
-- phone_number VARCHAR(55)
-- password VARCHAR(55)
-- type VARCHAR(55) (customer, owner, employee)
-- member_since DATE
INSERT INTO widgets (name, user_id) VALUES ('Bearings', 2);
-- INSERT OWNER
INSERT INTO users (name, phone_number, type, password) VALUES ('Leighton', 6042347564, 'owner', 'password');

-- INSERT USERS
INSERT INTO users (
  name,
  phone_number,
  password)
   VALUES (
    'Alice',
    6042347564,
    'password'
    );
INSERT INTO users (
  name,
  phone_number,
  password)
   VALUES (
    'Adam',
    6042448888,
    'password'
    );
INSERT INTO users (
  name,
  phone_number,
  password)
   VALUES (
    'Elliott',
    6042569090,
    'password'
    );

