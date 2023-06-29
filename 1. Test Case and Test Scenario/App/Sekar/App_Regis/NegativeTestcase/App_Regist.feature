Feature: App User Registration

Background: User akses app homepage
Given : User klik "Akun"
And klik "Daftar"

Scenario: User register akun dengan registered email

When user mengisi field Nama dengan "<donna>"
And user mengisi email dengan "<donnadefleur@gmail.com>"
And user mengisi field password dengan "<donna123>"
And user mengisi field nomor HP dengan "<0812222444>"
And user mengisi field Kota dengan "<yogyakarta>"
And user mengisi field Alamat dengan "<jalan baru>"
And user klik button "Daftar"
Then user mendapat pesan "<Email sudah digunakan>"