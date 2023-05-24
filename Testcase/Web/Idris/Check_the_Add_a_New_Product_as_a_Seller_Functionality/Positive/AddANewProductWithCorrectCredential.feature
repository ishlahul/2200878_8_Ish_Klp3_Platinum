Feature: Check the Product Purchase as a Buyer Functionality

Background: Access Product Info Page
    Given user login the web https://secondhand-store.herokuapp.com/
        And user click on sell button "button[class='btn btn-color-theme pl-3 pr-3 button-jual']"
    
Scenario: User Wants to Add a New product Use Correct Credential
    When user fill in product name text box "input[id='nm_produk']" with "<name>"
        And user fill in product price text box "input[id='harga_produk']" with "<price>"
        And user choose product category "select[id='kategori']" with "<category>"
        And user fill in product description text box "input[id='deskripsi']" with "<description>"
        And user upload product picture "upload[class='bi bi-plus-square-dotted mt-2']" with "<image>"
        And user click on publish button "button[class='btn btn-primary']"
    Then user should see popup "<message>"

Examples:
    | name             | price   | category   | description    | image        | message         |
    | Asus K46CM       | 6000000 | Elektronik | Mulus no minus | asus.jpg     | Success Message |
    | Sepeda           | 500000  | Kendaraan  | Bosen          | sepeda.jpg   | Success Message |
    | 0321             | 200000  | Elektronik | Baru banget    | 0321.jpg     | Success Message |
    | Router >300 mbps | 50000   | Elektronik | Jual rugi      | router.jpg   | Success Message |
    | Kemeja           | 150000  | Baju       | Salah ukuran   | kemeja.jpg   | Success Message |
    | Kaos             | 200000  | Baju       | 50x70          | kaos.jpg     | Success Message | 
    | Sofa             | 1000000 | Hoby       | 2m*1m -noda    | sofa.jpg     | Success Message |
    | Tensi            | 200000  | Kesehatan  | Ganti Baru     | tensi.jpg    | Success Message |
    | TWS Anker        | 300000  | Elektronik | Ilang 1        | tws.jpg      | Success Message |
    | TWS Anker        | 300000  | Elektronik | Ilang 1        | tws.jpeg     | Success Message |
    | TWS Anker        | 300000  | Elektronik | Ilang 1        | tws.png      | Success Message |