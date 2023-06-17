Feature: App Update Alamat

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui alamat di aplikasi

        When user klik edit alamat button
        And user tidak mengisi kolom alamat
        And klik "Simpan"
        Then user mendapat pesan "Wajib diisi"