# object, collection of key/value pairs, dictionaries, associative arrays, hashes

user = {
  "first_name" => "john",
  "last_name" => "stamos"
}

puts user
puts user["first_name"]

user = {
  :first_name => "ada",
  :last_name => "lovelace"  
}

puts user
p user[:first_name]

user = {
  first_name: "ada",
  last_name: "lovelace"
}

puts user
