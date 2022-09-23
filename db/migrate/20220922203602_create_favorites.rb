class CreateFavorites < ActiveRecord::Migration[7.0]
  def change
    create_table :favorites do |t|
      t.string :name
      t.text :description
      t.integer :review_id
      t.integer :user_id
      
      t.timestamps
    end
  end
end
