Feature: App Update Nomor HP

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nomor hp di aplikasi

        When user klik edit nomor hp button
        And user mengubah nomor dengan "<nomor>"
        And klik "Simpan"
        Then user mendapat pesan "Profil berhasil diperbaharui"


        Examples:
            | nomor   |
            | 0812334455 |
            | 08123344556 |
            | 0812334455667 |