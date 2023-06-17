Feature: App Update Password Visibility

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button
        And klik edit password button
        And user memasukan password lama

    Scenario: User klik icon mata untuk melihat password yang diinput

        When user memasukan password baru dengan "<gardenia@yopmail.com>"
        And user memasukan konfirmasi password baru dengan "<gardenia@yopmail.com>"
        And klik icon mata pada kolom "<password lama>", kolom "<password baru>", kolom "<konfirmasi password baru>"
        Then password terlihat