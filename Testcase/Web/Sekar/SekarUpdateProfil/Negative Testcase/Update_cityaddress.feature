Feature: Web Update Profile City Address

Background: User login dengan email terdaftar

Given : User akses homepage
And klik icon Profile

Scenario Outline: User memperbarui kota domisili

When user klik kolom kota
And user memilih "Pilih Kota"
And user klik "Terbitkan"
Then user mendapatkan pesan "Nama kota berhasil diperbaharui"
And "kota tidak diketahui" muncul di halaman profil