Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun dengan kolom nama kosong

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user mengisi kolom email "firetruck@yopmail.com" dan password "dream127"
        And user menekan tombol "Daftar" tanpa mengisi kolom nama
        Then user mendapatkan pesan "silahkan isi kolom ini" di kolom nama