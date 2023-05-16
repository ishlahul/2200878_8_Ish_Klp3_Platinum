Feature: Web User Register

Scenario outline: User melakukan Register

Given User akses url "https://secondhand-store.herokuapp.com/signup"
When user menginput nama "kazuha" dan email "unforgiven@yopmail.com" dan password "lesserafim22"
And user menekan tombol "Daftar"
Then user mendapatkan pesan "Silahkan verifikasi email agar dapat menggunakan layanan kami"