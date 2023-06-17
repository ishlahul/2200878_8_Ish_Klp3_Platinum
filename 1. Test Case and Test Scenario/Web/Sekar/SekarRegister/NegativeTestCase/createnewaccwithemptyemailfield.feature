Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun dengan kolom email kosong

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user mengisi kolom nama "Morri" dan password "dream127"
        And user menekan tombol "Daftar" tanpa mengisi kolom email
        Then user mendapatkan pesan "silahkan isi kolom ini" di kolom email 