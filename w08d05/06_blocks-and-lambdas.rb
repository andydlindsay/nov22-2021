names = ['Alice', 'Bob', 'Carol']

# names.each do |name|
#   puts "hello there #{name}"
# end

my_lambda = lambda { |name|
  puts "hello there #{name}"
}

names.each &my_lambda

dogs = ['Benji', 'Dioji', 'Scooby Doo']

dogs.each &my_lambda
