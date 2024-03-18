class CreateVideos < ActiveRecord::Migration[7.1]
  def change
    create_table :videos do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.string :video_url
      t.string :thumbnail_url
      t.integer :view_count, default: 0

      t.timestamps
    end
  end
end
