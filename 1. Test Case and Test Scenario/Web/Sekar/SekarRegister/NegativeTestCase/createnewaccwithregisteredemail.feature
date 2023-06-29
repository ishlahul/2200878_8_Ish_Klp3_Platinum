Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun menggunakan email yang sudah terdaftar

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user menginput nama "sekar" dan email "sekarjati.jati@gmail.com" dan password "minho0912"
        And user menekan tombol "Daftar"
        Then user mendapatkan pesan "Email sudah digunakan"