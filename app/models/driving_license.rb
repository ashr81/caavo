class DrivingLicense < ApplicationRecord

  enum gender: {
    male: 1,
    female: 2,
    not_specified: 3
  }
end
