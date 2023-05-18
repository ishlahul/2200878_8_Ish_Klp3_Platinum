Feature: App Update Product Name

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan perubahan pada kolom nama

Given user akses halaman produk
When user input pada kolom nama produk dengan "<namaproduk>"
And user tekan tombol "Perbarui Produk"
Then muncul pesan "Produk berhasil diperbarui" kemudian kembali ke halaman produk

Examples:
| Nama Produk   | 
| Sepeda    | 
| 123   |
| @$@    |