# a block starts with `do` and ends with `end`

i = 0
# loop do
#   i += 1
#   # puts "hello " + i.to_s
#   puts "hello #{i}" # `hello ${i}`

#   # if i >= 10
#   #   break
#   # end
#   break if i >= 10
# end

# while i <= 10 do
#   i += 1
#   puts "hello #{i}"
# end

# until i > 10 do
#   i += 1
#   puts "hello #{i}"
# end

names = ['Alice', 'Bob', 'Carol']

# for..in === for..of, .each === .forEach
# for name in names do
#   puts "hello there #{name}"
# end

# names.each_with_index do |name, index|
#   puts "hello #{name}, how are you? #{index}"
# end

# (5..15).each do |num|
#   puts "yay!! #{num}"
# end

10.times do |num|
  puts "all done! #{num}"
end
