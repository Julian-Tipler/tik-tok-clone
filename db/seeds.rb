# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
Like.destroy_all
Comment.destroy_all
Video.destroy_all
User.destroy_all

10.times do
  User.create!(
    username: Faker::Internet.username,
    email: Faker::Internet.email,
    password_digest: Faker::Internet.password(min_length: 10, max_length: 20),
    bio: Faker::Lorem.sentence(word_count: 10),
    profile_picture_url: Faker::Avatar.image(
      slug: "https://ui-avatars.com/api/?name=#{Faker::Name.first_name}+#{Faker::Name.last_name}", size: '50x50'
    )
  )
end

special_user = User.create!(
  username: 'tiplerj',
  email: 'tipler.julian@gmail.com',
  password: 'password123',
  bio: "I'm Julian",
  profile_picture_url: Faker::Avatar.image(
    slug: 'https://ui-avatars.com/api/?name=julian+tipler', size: '50x50'
  )
)

users_to_follow = User.where.not(id: special_user.id).limit(5)
special_user.following << users_to_follow

User.all.each do |user|
  2.times do
    user.videos.create!(
      title: Faker::Movie.title,
      description: Faker::Lorem.sentence(word_count: 10),
      video_url: Faker::Internet.url,
      thumbnail_url: Faker::LoremFlickr.image(size: '50x60'),
      view_count: rand(100..10_000)
    )
  end
end

Video.all.each do |video|
  rand(2..10).times do
    video.comments.create!(
      user: User.order('RANDOM()').first,
      content: Faker::Lorem.sentence(word_count: 5)
    )
  end
  users = User.order('RANDOM()').limit(5)
  users.each do |user|
    video.likes.create!(
      user_id: user.id
    )
  end
end

likeable_types = %w[Video Comment]

200.times do
  likeable_type = likeable_types.sample
  likeable = likeable_type.constantize.order('RANDOM()').first
  user = User.order('RANDOM()').first

  # Attempt to find an existing like first to avoid violating the unique constraint
  next if Like.exists?(likeable_type:, likeable_id: likeable.id, user_id: user.id)

  Like.create!(
    likeable_type:,
    likeable_id: likeable.id,
    user:
  )
end

puts 'Seed data created!'
