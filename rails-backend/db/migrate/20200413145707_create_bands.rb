class CreateBands < ActiveRecord::Migration[6.0]
  def change
    create_table :bands do |t|
      t.string :band_name
      
      t.string :bandcamp_url
      t.integer :iframe_num
      t.timestamps
    end
  end
end
