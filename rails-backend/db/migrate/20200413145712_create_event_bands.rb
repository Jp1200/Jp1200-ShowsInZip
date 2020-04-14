class CreateEventBands < ActiveRecord::Migration[6.0]
  def change
    create_table :event_bands do |t|

      t.timestamps
    end
  end
end
