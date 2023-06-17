Feature: App Update Password

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button
        And klik edit password button
        And user tidak mengisi kolom password lama

    Scenario: User memperbarui password di aplikasi

        When user memasukan password baru dengan "<password>"
        And user memasukan konfirmasi password baru dengan "<password baru>"
        And klik "Simpan"
        Then user mendapat pesan "<pesan>"


        Examples:
            | password       | password baru  | pesan |
            | iris1234       | iris1234       | wajib diisi |
            |                | iris1234       | wajib diisi |
            | iris1234       |                | wajib diisi |
            |                |                | wajib diisi |