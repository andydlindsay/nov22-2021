# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting the seeds..."

puts "creating the characters"

10.times do
  Character.create(
    name: Faker::TvShows::RickAndMorty.character
  )
end

puts "retrieving characters"

characters = Character.all

puts "creating the locations"

50.times do
  Location.create(
    name: Faker::TvShows::RickAndMorty.location,
    quote: Faker::TvShows::RickAndMorty.quote,
    character: characters.sample
  )
end

puts "all done!"
