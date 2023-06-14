Feature: App Update Product Description

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan perubahan pada kolom nama

Given user akses halaman produk
When user input pada kolom deskripsi produk dengan "<deskripsi>"
And user tekan tombol "Perbarui Produk"
Then muncul pesan "Produk berhasil diperbarui" kemudian kembali ke halaman produk

Examples:
| Deskripsi   | 
| Sepedaa    | 
| 1234   |
| @$@&    |