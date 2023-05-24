Feature: Check the Product Purchase as a Buyer Functionality

Background: Access Product Info Page
    Given user login the web https://secondhand-store.herokuapp.com/
        And user click on sell button "button[class='btn btn-color-theme pl-3 pr-3 button-jual']"
    
Scenario: User Wants to Add a New product Use Incorrect Credential
    When user fill in product name text box "input[id='nm_produk']" with "<name>"
        And user fill in product price text box "input[id='harga_produk']" with "<price>"
        And user choose product category "select[id='kategori']" with "<category>"
        And user fill in product description text box "input[id='deskripsi']" with "<description>"
        And user upload product picture "upload[class='bi bi-plus-square-dotted mt-2']" with "<image>"
        And user click on publish button "button[class='btn btn-primary']"
    Then user should see popup "<message>"

Examples:
    | name           | price        | category   | description  | image        | message         |
    |                |              |            |              |              | Warning Message |
    |                | 3000000      | Elektronik | Murah meriah | laptop.jpg   | Warning Message |
    | Laptop         |              | Elektronik | Murah meriah | laptop.jpg   | Warning Message |
    | Laptop         | 3000000      |            | Murah meriah | laptop.jpg   | Warning Message |
    | Jaket          | 500000       | Baju       |              | jaket.jpg    | Warning Message |
    | Sepeda Listrik | 7000000      | Kendaraan  | Ganti baru   |              | Warning Message |
    | Cek gula darah | Seratus ribu | Kesehatan  | Salah beli   | cekdarah.jpg | Warning Message |
    | Gitar          | 20*10^2      | Hoby       | Masih bagus  | gitar.jpg    | Warning Message |
    | Motor supra    | -9000000     | Kendaraan  | Bodong       | supra.jpg    | Warning Message |
    | Keyboard       | 250000       | Elektronik | Mulus Banget | keyboard.jpg | Warning Message |
    | Jeans          | 400000       | Baju       | Kegedean     | jeans.gif    | Warning Message |
    | Alat pijat     | 700000       | Kesehatan  | Ga kepake    | pijat.psd    | Warning Message |
    | Bola basket    | 900000       | Hoby       | Original     | basket.tiff  | Warning Message |
    | Oxymeter       | 145000       | Kesehatan  | Kelebihan    | oxymeter.raw | Warning Message |
    | Wajan          | 635000       | Hoby       | Baret dikit  | wajan.pdf    | Warning Message |
    | Poco F3        | 4250000      | Elektronik | Bosen        | pocof3.eps   | Warning Message |
    | Sepatu futsal  | 350000       | Hoby       | Kekecilan    | sepatu.ai    | Warning Message |
    | Kulkas         | 8000000      | Elektronik | Nego tipis   | kulkas.heif  | Warning Message |