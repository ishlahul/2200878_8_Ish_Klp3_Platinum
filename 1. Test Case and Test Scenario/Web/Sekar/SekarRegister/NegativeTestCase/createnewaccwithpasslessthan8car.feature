Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun menggunakan password kurang dari 8 karakter

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user menginput nama "Vernon" dan email "ssonogong@yopmail.com" dan password "s17"
        And user menekan tombol "Daftar"
        Then user mendapatkan pesan "Password must be at least 8-12 characters long"