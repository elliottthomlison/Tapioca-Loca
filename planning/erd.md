
# Database
Tapioca Loca

# Users
id SERIAL PK
name VARCHAR(55)
phone_number VARCHAR(55)
password VARCHAR(55)
type VARCHAR(55) (customer, owner, employee)


# Staff
id SERIAL PK
user_id FK users.id
on_shift BOOLEAN
work_phone VARCHAR(55)

# Menus
id SERIAL PK
name VARCHAR(55)
type VARCHAR(55)

# Items
id SERIAL PK
menu_id FK menus.id
name VARCHAR(55)
bill_time_minutes INTEGER
price_cents INTEGER
stock INTEGER

# Cart
id SERIAL PK
item_id FK items.id
item_price_cents FK items.price_cents
item_bill_time FK items.bill_time

# Purchase_order
id SERIAL PK
item_id FK items.id AS order_items 
item_price_cents FK items.price_cents
item_bill_time FK items.bill_time

# Text Message
id SERIAL PK
user_name FK users.name
user_phone FK users.phone_number
staff_phone FK staff.work_phone
bill_time FK items.bill_time

# Active Orders
id SERIAL PK
user_name FK users.name
user_phone FK users.phone_number
bill_time FK items.bill_time
item_id FK items.id





