
# Database
Tapioca Loca

# Users
id SERIAL PK
name VARCHAR(55)
phone_number VARCHAR(55)
password VARCHAR(55)
type VARCHAR(55) (customer, owner, employee)
member_since DATE

 

# Cart
id SERIAL PK
item_name FK items.name
item_price_cents FK items.price_cents
<!-- changed line 35 -->
preparation_time FK items.bill_time

<!-- just reference this information via twilio / no need for a dtabase!-->
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

# Menu_items
id SERIAL PK
menu_id FK menus.id
name VARCHAR(55)
preparation_time INTEGER 
<!-- adjusted naming + units of time -->
price_cents INTEGER
<!-- stretch goal -->
stock INTEGER

<!-- bridge table for the item + order because many many (include quanity in the bridge) !-->
# Order 
id SERIAL PK
user_name FK users.name
<!--dont repeat info thus we just want to referece the user id + use a join to grab the phone number !-->
user_id FK users.phone_number
item_price_cents FK items.price_cents
<!-- change line 42 -->
<!--- join line 44 + 45 / item id !--->
item_bill_time FK items.bill_time
item_name FK items.name AS order_items 
is_active BOOLEAN

# order_item




