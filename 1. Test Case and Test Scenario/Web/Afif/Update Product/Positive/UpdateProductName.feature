Feature: Web Update Product Name

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan perubahan pada kolom nama

Given user akses alamat "https://secondhand-store.herokuapp.com/productinfo"
When user input pada kolom nama produk dengan "<namaproduk>"
And user klik tombol "Terbitkan"
Then user kembali ke halaman utama

Examples:
| Nama Produk   | 
| Sepeda    | 
| 123   |
| @$@    |