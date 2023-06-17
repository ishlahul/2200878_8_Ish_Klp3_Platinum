Feature: App Update Email

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui email di aplikasi

        When user klik edit email button
        And user mengubah email dengan "<rosemary@yopmail.com>"
        And klik "Simpan"
        Then user mendapat pesan "Profil berhasil diperbaharui"