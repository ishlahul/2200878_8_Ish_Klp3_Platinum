Feature: Web Update Profile Picture

Background: User login dengan email terdaftar

Given : User akses homepage
And klik icon Profile

Scenario Outline: User memperbarui foto profil

When user klik button foto profil
And user memilih file foto dengan "<format>"
And user klik button checklist
Then user mendapatkan pesan "Foto profil berhasil diperbaharui"
And foto profil terbaru muncul di halaman profil


Examples:
    | format    |
    | /foto.png |
    | /foto.jpg |
    | /foto.jpeg|