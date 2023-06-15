Feature: App Update Alamat

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui alamat di aplikasi

        When user klik edit alamat button
        And user mengubah alamat dengan "<alamat>"
        And klik "Simpan"
        Then user mendapat pesan "Profil berhasil diperbaharui"


        Examples:
            | alamat    |
            | palagan   |
            | p4l4g4n   |
            | palagan!@! |
            | p4l4g4n!@! |