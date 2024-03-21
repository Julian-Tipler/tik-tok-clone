class Video < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_many :likes, as: :likeable, dependent: :destroy

  def like_by(user)
    likes.create!(user_id: user.id) unless likes.where(user_id: user.id)
  end

  def like_count
    likes.count
  end

  def unlike_by(user)
    likes.destroy!(user_id: user.id)
  end
end
