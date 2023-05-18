Feature: Web Update Product Image

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan unggah foto pada bagian gambar

Given user akses alamat "https://secondhand-store.herokuapp.com/productinfo"
When user unggah file pada bagian foto produk dengan "<fotoproduk>"
And user klik tombol "Terbitkan"
Then user kembali ke halaman utama

Examples:
| Foto Produk   | 
| /foto.gif    |
| /foto.psd    | 
| /foto.tiff   |
| /foto.eps   |
| /foto.ai   |
| /foto.heif   |
| /foto.raw   |
| /foto.pdf   |