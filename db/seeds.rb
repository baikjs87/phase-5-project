puts "Seeding Users..."
jason = User.create(username: 'jason', password_digest: 'test')
user1 = User.create(username: 'user1', password_digest: 'test')
user2 = User.create(username: 'user2', password_digest: 'test')
user3 = User.create(username: 'user3', password_digest: 'test')

puts "Seeding Brands..."
brand1 = Brand.create(name: 'NIKE')
brand2 = Brand.create(name: 'ADIDAS')
brand3 = Brand.create(name: 'APPLE')
brand4 = Brand.create(name: 'SONY')

puts "Seeding Categories..."
category1 = Category.create(name: 'SHOES')
category2 = Category.create(name: 'TSHIRT')
category3 = Category.create(name: 'LAPTOP')
category4 = Category.create(name: 'HEADPHONE')

puts "Seeding Reviews..."
review1 = Review.create({
    'title': "Nike Shoes Review", 
    'brand_id': 1,
    'category_id': 1,
    'price': 100,
    'rating': 4,
    'recommend': 'yes',
    'description': 'A good Nike Shoes',
    'user_id': 1
})
review2 = Review.create({
    'title': "Adidas T-shirt Review", 
    'brand_id': 2,
    'category_id': 2,
    'price': 40,
    'rating': 2,
    'recommend': 'no',
    'description': 'I wouldn\'t get it',
    'user_id': 2
})
review3 = Review.create({
    'title': "Apple laptop Review", 
    'brand_id': 3,
    'category_id': 3,
    'price': 2400,
    'rating': 5,
    'recommend': 'yes',
    'description': 'An expensive laptop but its Apple',
    'user_id': 3
})
review4 = Review.create({
    'title': "Sony headphone Review", 
    'brand_id': 4,
    'category_id': 4,
    'price': 300,
    'rating': 3,
    'recommend': 'no',
    'description': 'A decent headphone',
    'user_id': 4
})

puts "✅ Done seeding!"