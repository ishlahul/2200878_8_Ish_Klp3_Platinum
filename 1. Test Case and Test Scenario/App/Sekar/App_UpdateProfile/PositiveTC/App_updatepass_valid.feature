Feature: App Update Password

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button
        And klik edit password button
        And user memasukan password lama

    Scenario: User memperbarui password di aplikasi

        When user memasukan password baru dengan "<password>"
        And user memasukan konfirmasi password baru dengan "<password baru>"
        And klik "Simpan"
        Then user mendapat pesan "Password berhasil diperbaharui"


        Examples:
            | password   | password baru |
            | rose88 | rose88 |
            | rose127 | rose127 |
            | rose1234rose | rose1234rose |
            