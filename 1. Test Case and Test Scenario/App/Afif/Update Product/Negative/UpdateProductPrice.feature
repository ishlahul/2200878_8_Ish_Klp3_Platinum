Feature: App Update Product Price

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan perubahan pada kolom harga

Given user akses halaman produk
When user input pada kolom harga produk dengan "<hargaproduk>"
And user tekan tombol "Perbarui Produk"
Then muncul pesan "Produk gagal diperbarui"

Examples:
| Harga Produk   | 
| -150000    | 
| seratus lima puluh ribu   |
| 150000,-    |