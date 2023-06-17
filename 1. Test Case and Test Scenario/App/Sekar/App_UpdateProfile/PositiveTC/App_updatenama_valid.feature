Feature: App Update Nama Profil

    Background: User login dengan email terdaftar

        Given : User akses page akun saya
        And klik icon edit button

    Scenario: User memperbarui nama profil di aplikasi

    When user klik edit nama button
    And user mengubah nama dengan "<nama>"
    And klik "Simpan"
    Then user mendapat pesan "Profil berhasil diperbaharui"


    Examples:
    | nama   |
    | farah  |
    | f4r4h  |
    | farah!$! |
    | f4r4h!@! |