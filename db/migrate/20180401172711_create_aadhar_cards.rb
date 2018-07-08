class CreateAadharCards < ActiveRecord::Migration[5.2]
  def change
    create_table :aadhar_cards do |t|

      t.string :aadhar_number
      t.string :name
      t.string :associative_name
      t.integer :gender
      t.datetime :dob
      t.text :address
      t.string :pincode
      t.timestamps
    end
  end
end
