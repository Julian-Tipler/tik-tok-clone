class Video < ApplicationRecord
  belongs_to :user
  has_many :comments

  has_many :likes, as: :likeable, dependent: :destroy

  # paginates_per 10

  def self.videos_for_user(user)
    where.not(user:)
  end

  def toggle_like_by(user)
    like = likes.find_by(user_id: user.id)
    if like
      like.destroy
    else
      likes.create!(user_id: user.id)
    end
  end

  def like_count
    likes.count
  end
end
