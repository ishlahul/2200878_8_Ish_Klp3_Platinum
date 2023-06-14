Feature: App Update Product Image

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan unggah foto pada bagian gambar

Given user akses halaman produk
When user unggah file pada bagian foto produk dengan "<fotoproduk>"
And user tekan tombol "Perbarui Produk"
Then muncul pesan "Produk gagal diperbarui"

Examples:
| Foto Produk   | 
| /foto.gif    | //sukses tapi ngga mengubah gambar produk
| /foto.psd    | 
| /foto.tiff   |
| /foto.eps   |
| /foto.ai   |
| /foto.heif   |
| /foto.raw   |
| /foto.pdf   |