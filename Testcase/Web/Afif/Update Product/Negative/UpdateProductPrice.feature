Feature: Web Update Product Price

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan perubahan pada kolom harga

Given user akses alamat "https://secondhand-store.herokuapp.com/productinfo"
When user input pada kolom harga produk dengan "<hargaproduk>"
And user klik tombol "Terbitkan"
Then user kembali ke halaman utama

Examples:
| Harga Produk   | 
| -150000    | 
| seratus lima puluh ribu   |
| 150000,-    |