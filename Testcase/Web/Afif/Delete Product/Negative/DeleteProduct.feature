Feature: Web Delete Product

Background: User masuk dengan akun

Given user akses home page
And user login menggunakan akun terdaftar

Scenario: User melakukan hapus produk

Given user akses alamat "https://secondhand-store.herokuapp.com/productpage/{id}"
When user klik tombol "Delete"
Then user masih pada halaman produk