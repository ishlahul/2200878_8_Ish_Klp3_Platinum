Feature: Web User Register

Scenario outline: User melakukan Register

Given User akses url "https://secondhand-store.herokuapp.com/signup"
When user menginput nama "sakura" dan email "simonsays@yopmail.com" dan password "simon123"
And user menekan tombol "Daftar"
Then user mendapatkan pesan "Silahkan verifikasi email agar dapat menggunakan layanan kami"