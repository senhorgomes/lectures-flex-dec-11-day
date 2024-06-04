# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# How can we create mock data?

# We need a way to let the user know if the seeds are working

puts "Seeding data..."

puts "Creating Authors"

# Author.create(
#     first_name: "Bryan",
#     last_name: "gomes"
# )
20.times do
    Author.create(
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name
    )
end

puts "Authors created"

puts "Creating books"

10.times do
    Book.create(
        author: Author.all.sample,
        title: Faker::Book.title,
        genre: Faker::Book.genre,
        printyear: Faker::Number.between(from: 1900, to: 2024),
        publisher: Faker::Book.publisher,
        page_count: Faker::Number.between(from: 100, to: 500),
        price: Faker::Number.between(from: 20, to: 50),
    )
end

puts "Books created"
puts "Jobs done!"
#     t.integer "price"
#     t.bigint "author_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false