# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

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

User.all.each do |user|
  5.times do
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
end

likeable_types = %w[Video Comment]

200.times do
  likeable_type = likeable_types.sample
  Like.create!(
    likeable_type:,
    likeable_id: likeable_type.constantize.order('RANDOM()').first.id,
    user: User.order('RANDOM()').first
  )
end

puts 'Seed data created!'
