class AddPrintYearToBooks < ActiveRecord::Migration[7.0]
  def change
    add_column :books, :printyear, :integer
  end
end
