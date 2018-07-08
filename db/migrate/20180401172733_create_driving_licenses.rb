class CreateDrivingLicenses < ActiveRecord::Migration[5.2]
  def change
    create_table :driving_licenses do |t|

      t.string :license_number
      t.string :name
      t.string :associative_name
      t.datetime :dob
      t.integer :gender
      t.text :address
      t.string :pincode
      t.datetime :valid_till
      t.timestamps
    end
  end
end
