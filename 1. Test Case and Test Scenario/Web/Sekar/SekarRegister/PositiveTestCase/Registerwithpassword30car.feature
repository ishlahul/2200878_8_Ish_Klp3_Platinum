Feature: Web User Register

Scenario outline: User melakukan register dengan password 30 karakter

Given User akses url "https://secondhand-store.herokuapp.com/signup"
When user menginput nama "jeanno" dan email "saturdaydrip@yopmail.com" dan password "2baddies2baddies1porscheluvyou"
And user menekan tombol "Daftar"
Then user mendapatkan pesan "Silahkan verifikasi email agar dapat menggunakan layanan kami"