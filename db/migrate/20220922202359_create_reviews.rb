class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :title
      t.text :description
      t.float :price
      t.integer :rating
      t.boolean :recommendation
      t.integer :user_id
      t.integer :category_id
      t.integer :brand_id

      t.timestamps
    end
  end
end
