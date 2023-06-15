Feature: Web Update Profile Name

Background: User login dengan email terdaftar

Given : User akses homepage
And klik icon Profile

Scenario: User memperbarui nama profil

When user mengubah nama menggunakan "<nama>"
And user klik button "Submit"
Then user mendapatkan pesan "Nama profil berhasil diperbaharui"
And nama profil terbaru muncul di halaman profil


Examples:
    | nama   |
    | winter |
    | 1277   |
    | !@@!   |
    | winter12 |
    | winter!!! |
    | @winter127! |