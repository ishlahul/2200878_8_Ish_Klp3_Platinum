Feature: App Delete Product

Background: User masuk dengan akun

Given user buka app
And user masuk dengan akun terdaftar

Scenario: User melakukan hapus produk

Given user akses halaman produk 
When tombol ikon "bin"
And user klik tombol "Hapus"
Then muncul pesan "Produk berhasil dihapus"