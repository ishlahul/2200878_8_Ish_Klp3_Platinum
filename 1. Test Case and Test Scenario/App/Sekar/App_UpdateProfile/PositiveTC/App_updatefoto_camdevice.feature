Feature: App Update Profile Picture

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui foto profil di aplikasi menggunakan camera device

        When user klik button foto profil
        And user klik icon kamera
        And user mengambil foto dari kamera
        And user klik "OK"
        Then user mendapatkan pesan "Foto profil berhasil diperbaharui"
        And foto profil terbaru muncul di halaman profil