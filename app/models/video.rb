class Video < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_many :likes, as: :likeable, dependent: :destroy

  def like_by(user)
    likes.create!(user_id: user.id)
  end
end
