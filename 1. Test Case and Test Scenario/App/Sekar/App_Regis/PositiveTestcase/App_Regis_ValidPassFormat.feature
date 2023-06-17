Feature: App User Registration

    Background: User akses app homepage
        Given : User klik "Akun"
        And klik "Daftar"

    Scenario: User register akun dengan valid password format

        When user mengisi field Nama dengan "<nama>"
        And user mengisi email dengan "<email>"
        And user mengisi field password dengan "<password>"
        And user mengisi field nomor HP dengan "<nomor>"
        And user mengisi field Kota dengan "<kota>"
        And user mengisi field Alamat dengan "<alamat>"
        And user klik button "Daftar"
        Then user mendapat pesan "<pesan>"

        Examples:
            | nama | email                   | password | nomor | kota | alamat | pesan |
            | lily | butterbeer2@yopmail.com | pott3r | 08122223344 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |
            | lily | butterbeer3@yopmail.com | potterhead12 | 08122223344 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |
            | lily | butterbeer4@yopmail.com | lumos123 | 08122223344 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |