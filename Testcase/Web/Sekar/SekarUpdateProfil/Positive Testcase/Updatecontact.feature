Feature: Web Update Profile Contact number

Background: User login dengan email terdaftar

Given : User akses homepage
And klik icon Profile

Scenario Outline: User memperbarui nomor kontak

When user mengubah nomor kontak dengan format numeric
And user klik "Submit"
Then user mendapatkan pesan "Nomor kontak berhasil diperbaharui"