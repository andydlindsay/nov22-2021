# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "running the seeds"

puts "creating the powers"
10.times do
  Power.create(
    power: Faker::Superhero.power
  )
end

puts "grab the powers"
powers = Power.all

puts "creating the heroes"
25.times do
  Hero.create(
    name: Faker::Superhero.name,
    prefix: Faker::Superhero.prefix,
    suffix: Faker::Superhero.suffix,
    power: powers.sample
  )
end

puts "all done!"
