Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun dengan kolom kosong

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user tidak mengisi kolom nama dan email address dan password
        And user menekan tombol "Daftar"
        Then user mendapatkan pesan "silahkan isi kolom ini"