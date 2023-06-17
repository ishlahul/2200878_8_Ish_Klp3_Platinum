import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import static com.kms.katalon.core.testobject.ObjectRepository.findWindowsObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.cucumber.keyword.CucumberBuiltinKeywords as CucumberKW
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testng.keyword.TestNGBuiltinKeywords as TestNGKW
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

WebUI.click(findTestObject('Object Repository/Page_Add_Product/Page_Produk Saya'))

WebUI.click(findTestObject('Object Repository/Page_Add_Product/Button_Tambah Produk'))

WebUI.setText(findTestObject('Object Repository/Page_Add_Product/input_Nama Produk_productname'), 'contoh')

WebUI.setText(findTestObject('Object Repository/Page_Add_Product/input_Harga Produk_productprice'), '123')

WebUI.selectOptionByValue(findTestObject('Object Repository/Page_Add_Product/select_Pilih KategoriHobiKendaraanBajuElekt_20972a'), 
    '1', true)

WebUI.setText(findTestObject('Object Repository/Page_Add_Product/textarea_Deskripsi_productdescription'), 'rumah')

WebUI.uploadFile(findTestObject('Page_Add_Product/button_upload_image'), 'D:\\sepeda.jpg')

WebUI.click(findTestObject('Object Repository/Page_Add_Product/label_Terbitkan'))

WebUI.closeBrowser()

