Feature: Web Update Product Price

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan perubahan pada kolom harga

Given user akses alamat "https://secondhand-store.herokuapp.com/productinfo"
When user input harga produk "150000"
And user klik tombol "Terbitkan"
Then user kembali ke halaman utama