Feature: Web Update Product Description

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan perubahan pada kolom nama

Given user akses alamat "https://secondhand-store.herokuapp.com/productinfo"
When user input pada kolom deskripsi produk dengan "<deskripsi>"
And user klik tombol "Terbitkan"
Then user kembali ke halaman utama

Examples:
| Deskripsi   | 
| Sepedaa    | 
| 1234   |
| @$@&    |