class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.string :location
      t.string :show_date
      t.string :venue_name
      t.timestamps
    end
  end
end
