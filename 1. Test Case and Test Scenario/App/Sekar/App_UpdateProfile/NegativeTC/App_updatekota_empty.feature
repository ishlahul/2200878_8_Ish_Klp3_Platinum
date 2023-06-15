Feature: App Update Nama Kota

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nama kota di aplikasi

        When user klik edit nama kota button
        And user tidak mengisi kolom kota
        And klik "Simpan"
        Then user mendapat pesan "Wajib diisi"