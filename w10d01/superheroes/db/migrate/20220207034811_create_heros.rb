class CreateHeros < ActiveRecord::Migration[6.1]
  def change
    create_table :heros do |t|
      t.string :name
      t.string :prefix
      t.string :suffix
      t.references :power, index: true, foreign_key: true
      t.timestamps
    end
  end
end
