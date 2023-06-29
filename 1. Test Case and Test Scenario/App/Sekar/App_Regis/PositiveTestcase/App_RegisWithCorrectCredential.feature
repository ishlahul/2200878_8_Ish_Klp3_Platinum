Feature: App User Registration

Background: User akses app homepage
Given : User klik "Akun"
And klik "Daftar"

Scenario: User register akun dengan valid credential

When user mengisi field Nama dengan "Mingyu"
And user mengisi email dengan "rockwithyou@yopmail.com"
And user mengisi field password dengan "gose1234"
And user mengisi field nomor HP dengan "08123333331"
And user mengisi field Kota dengan "Semarang"
And user mengisi field Alamat dengan "Jl. Diponegoro Barat"
And user klik button "Daftar"
Then user mendapat pesan "Silahkan verifikasi email agar dapat menggunakan layanan kami"
