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

Mobile.tap(findTestObject('Page_Beranda Before Login/textfield_Search'), 0)

Mobile.setText(findTestObject('Page_Search/android.widget.EditText - Cari di Second Chance'), search, 0)

Mobile.delay(30, FailureHandling.STOP_ON_FAILURE)

//Mobile.callTestCase(findTestCase('Pages/Home Before Login/Input Search Product'), [('search') : 'meja'], FailureHandling.STOP_ON_FAILURE)
Mobile.callTestCase(findTestCase('Pages/Search/Verify First Product Search'), [:], FailureHandling.STOP_ON_FAILURE)

Mobile.getText(findTestObject('Page_Search/First Product Name'), 0)

Mobile.verifyMatch(Mobile.getText(findTestObject('Object Repository/Page_Search/First Product Name'), 0), ('(?i).*' + search + 
    '.*'), true)