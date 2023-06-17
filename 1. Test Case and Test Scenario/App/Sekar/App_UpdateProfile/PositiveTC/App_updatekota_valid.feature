Feature: App Update Nama Kota

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nama kota di aplikasi

        When user klik edit kota button
        And user mengubah nama kota dengan "<kota>"
        And klik "Simpan"
        Then user mendapat pesan "Profil berhasil diperbaharui"


        Examples:
            | kota   |
            | solo |
            | s0l0 |
            | solo!@! |
            | s0l0!@! |