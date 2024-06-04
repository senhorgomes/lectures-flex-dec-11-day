class RemoveIntegerFromBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :integer, :string
  end
end
