Feature: App User Registration

Background: User akses app homepage
Given : User klik "Akun"
And klik "Daftar"

Scenario: User register akun dengan empty field

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
    |      |       |          |       |      |        | Kolom tidak boleh kosong |
    |      | senomon@yopmail.com | temera123 | 08122223344 | yogyakarta | jalan baru | Nama tidak boleh kosong |
    | suzaki |     | temera123 | 08122223344 | yogyakarta  | jalan baru | Email tidak boleh kosong |
    | suzaki | senomon1@yopmail.com |   | 08122223344 | yogyakarta | jalan baru | Password tidak boleh kosong |
    | suzaki | senomon2@yopmail.com | temera123 |   | yogyakarta | jalan baru | Nomor telepon tidak boleh kosong |
    | suzaki | senomon3@yopmail.com | temera123 | 08122223344 |     | jalan baru | Kota tidak boleh kosong |
    | suzaki | senomon4@yopmail.com | temera123 | 08122223344 | yogyakarta |    | Alamat tidak boleh kosong |