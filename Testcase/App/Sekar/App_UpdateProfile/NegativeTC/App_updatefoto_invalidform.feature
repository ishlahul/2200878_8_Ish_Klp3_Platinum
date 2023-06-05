Feature: App Update Profile Picture

    Background: User login dengan email terdaftar

        Given : User akses informasi akun
        And klik icon Profil

    Scenario: User memperbarui foto profil

        When user klik button foto profil
        And user memilih file foto dengan format "<format>"
        And user klik button checklist
        And user klik "Submit"
        Then user mendapatkan pesan "Gunakan format foto .png/.jpg/.jpeg untuk memperbaharui foto profil"


        Examples:
            | format     |
            | /foto.gif  |
            | /foto.psd  |
            | /foto.tiff |
            | /foto.RAW  |
            | /foto.AI   |
            | /foto.HEIF |
            | /foto.pdf  |