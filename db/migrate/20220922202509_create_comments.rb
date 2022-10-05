class CreateComments < ActiveRecord::Migration[6.1]
  def self.up
    create_table :comments do |t|
      t.text :body, :formatted_body
      t.references :commentable, :polymorphic => true 
      t.references :user
      # t.integer :user_id
      # t.integer :review_id

      t.timestamps
    end

end
