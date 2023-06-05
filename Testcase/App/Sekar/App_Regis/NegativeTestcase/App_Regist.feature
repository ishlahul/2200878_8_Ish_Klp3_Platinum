Feature: App User Registration

Background: User akses app homepage
Given : User klik "Akun"
And klik "Daftar"

Scenario: User register akun dengan valid credential

When user mengisi field Nama dengan "<nama>"
And user mengisi email dengan "<email>"
And user mengisi field password dengan "<password>"
And user mengisi field nomor HP dengan "<nomor>"
And user mengisi field Kota dengan "<kota>"
And user mengisi field Alamat dengan "<alamat>"
And user klik button "Daftar"
Then user mendapat pesan "<pesan>"

Examples:
    | nama | email | password | nomor | kota | alamat | pesan |
