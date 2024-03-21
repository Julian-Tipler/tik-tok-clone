class VideoSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :video_url, :thumbnail_url, :view_count, :created_at, :user,
             :likes_count, :comments_count, :user_likes

  def likes_count
    object.likes.count
  end

  def user_likes
    scope && object.likes.exists?(user_id: scope.id)
  end

  def comments_count
    object.comments.count
  end
end
