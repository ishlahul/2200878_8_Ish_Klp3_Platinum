Feature: App Update Profile Picture

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui foto profil di aplikasi

        When user klik button foto profil
        And user memilih file foto dengan "<format>"
        And user klik button checklist
        And user klik "Simpan"
        Then user mendapatkan pesan "Foto profil berhasil diperbaharui"
        And foto profil terbaru muncul di halaman profil


        Examples:
            | format     |
            | /foto.png  |
            | /foto.jpg  |
            | /foto.jpeg |