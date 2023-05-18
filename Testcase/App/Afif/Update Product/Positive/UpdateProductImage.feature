Feature: App Update Product Image

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan unggah foto pada bagian gambar

Given user akses halaman produk
When user unggah file pada bagian foto produk dengan "<fotoproduk>"
And user tekan tombol "Perbarui Produk"
Then muncul pesan "Produk berhasil diperbarui" kemudian kembali ke halaman produk

Examples:
| Foto Produk   | 
| /foto.jpg    |
| /foto.jpeg    | 
| /foto.png   |