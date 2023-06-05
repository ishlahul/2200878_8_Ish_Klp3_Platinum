Feature: App User Registration

    Background: User akses app homepage
        Given : User klik "Akun"
        And klik "Daftar"

    Scenario: User register akun dengan valid phone number format

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
            | james | maxima2@yopmail.com | violet123 | 08122244 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |
            | james | maxima3@yopmail.com | violet123 | 0812222445567 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |
            | james | maxima4@yopmail.com | violet123 | 0812224455 | yogyakarta | jalan baru | Silahkan verifikasi email agar dapat menggunakan layanan kami |