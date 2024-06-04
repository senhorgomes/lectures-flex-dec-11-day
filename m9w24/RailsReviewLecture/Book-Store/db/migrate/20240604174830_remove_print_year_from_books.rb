class RemovePrintYearFromBooks < ActiveRecord::Migration[7.0]
  def change
    remove_column :books, :print_year, :string
  end
end
