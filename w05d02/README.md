# W05D02 - Database Design

### To Do
- [ ] Primary Keys/Foreign Keys
- [ ] Naming Conventions
- [ ] Data Types
- [ ] Relationship Types
- [ ] Design Concepts
- [ ] Entity Relationship Diagrams
- [ ] Student Suggestion ERD(s)

### Primary Keys and Foreign Keys
* uniquely identify a particular record
* has to be unique within the table
* any data type can be used as a PK
* PK are `id`
* Foreign keys are the PK in a different table
* FK has to be the same type as the PK

GET /users
GET /users/2

### Naming Conventions
* snake_case for all table and field names
* all table names are plural
* FK = singular of the table name plus `_id` (`user_id`)

### Data Types
* every field must have a data type assigned to it

users
id
first_name
last_name
age
username

* not a big deal anymore, you'll just choose from 4-5 types

### Relationship Types
* one-to-one - 1 record in the first table is related to only one record in the second
* many-to-one/one-to-many - 1 record in the first table is related to one or more in the second
* many-to-many - 1 or more records in the first table is related to one or more records in the second (need another table - join, junction, bridge)

employees
name
username
password

### Design Concepts
* required fields = think of how the record will be at initial creation time
* default values - timestamp NOW(), active = true, on_sale = false
* calculated fields - please NO, first_name last_name === full_name
* try not to delete anything - soft delete
* repeating values - alternative to ENUMs - pull repeated values out to a lookup table

ok
sad
happy

cities
Edmonton
Calgary
Edmonton

cities
1 Edmonton
2 Calgary
3 Vancouver
4 Regina
5 Saskatoon

Saskatoon
Toon town
S'toon
Sakatoonn

users

friends
user_id
friend_id


2022
'22
