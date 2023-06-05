Feature: App Update Nama Profil

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nama profil di aplikasi

        When user klik edit nama profil button
        And user tidak mengisi kolom nama
        And klik "Simpan"
        Then user mendapat pesan "Wajib diisi"