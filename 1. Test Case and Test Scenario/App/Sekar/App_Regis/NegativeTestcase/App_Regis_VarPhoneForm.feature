Feature: App User Registration

    Background: User akses app homepage
        Given : User klik "Akun"
        And klik "Daftar"

    Scenario: User register akun dengan various phone number format

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
            | james | maxima@yopmail.com | violet123 | 0812 | yogyakarta | jalan baru | nomor yang anda masukan tidak valid |
            | james | maxima1@yopmail.com | violet23 | 08123344556677 | yogyakarta | jalan baru | nomor yang anda masukan tidak valid |