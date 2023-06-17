Feature: App Update Nomor HP

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nomor hp di aplikasi

        When user klik edit nomor hp button
        And user mengubah nomor dengan "<nomor>"
        And klik "Simpan"
        Then user mendapat pesan "<pesan>"


        Examples:
            | nomor  | pesan |
            |        | Nomor tidak boleh kosong |
            | 0812   | Nomor yang anda masukan tidak valid |
            | 081233445566778899 | Nomor yang anda masukan tidak valid |