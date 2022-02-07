class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :quote

      t.references :character, index: true, foreign_key: true

      t.timestamps
    end
  end
end
