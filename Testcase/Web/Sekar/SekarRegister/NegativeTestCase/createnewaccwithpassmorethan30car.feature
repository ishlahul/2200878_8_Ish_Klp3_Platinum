Feature: Web User Registration

Scenario Outline: User melakukan registrasi akun menggunakan password lebih dari 30 karakter

        Given User akses url "https://secondhand-store.herokuapp.com/signup"
        When user menginput nama "Wendy" dan email "zimzalabim@yopmail.com" dan password "2baddies2baddies1porschejayajaya"
        And user menekan tombol "Daftar"
        Then user mendapatkan pesan "Password must be at least 8-12 characters long"