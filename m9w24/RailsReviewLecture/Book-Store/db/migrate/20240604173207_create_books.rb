class CreateBooks < ActiveRecord::Migration[7.0]
  def change
    create_table :books do |t|
      t.string :title
      t.string :print_year
      t.string :integer
      t.string :publisher
      t.string :genre
      t.integer :page_count
      t.integer :price
      t.references :author, null: false, foreign_key: true

      t.timestamps
    end
  end
end
