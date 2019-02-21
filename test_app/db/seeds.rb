# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
new_user1 = User.new
new_user1.first_name = 'Kendrick'
new_user1.last_name = 'Z'
new_user1.age = 33
new_user1.hometown = 'NYC'
new_user1.save

new_user2 = User.new
new_user2.first_name = 'Susanna'
new_user2.last_name = 'Z'
new_user2.age = 31
new_user2.hometown = 'NYC'
new_user2.save

new_user3 = User.new
new_user3.first_name = 'Jammy'
new_user3.last_name = 'Z'
new_user3.age = 24
new_user3.hometown = 'NYC'
new_user3.save
