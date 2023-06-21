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
import com.kms.katalon.core.webui.keyword.builtin.NavigateToUrlKeyword as NavigateToUrlKeyword
import com.kms.katalon.core.windows.keyword.WindowsBuiltinKeywords as Windows
import internal.GlobalVariable as GlobalVariable
import org.openqa.selenium.Keys as Keys

//int intindex = 0
//def xpath = ('//div[@id=products]/div[' + intindex) + '])'
//WebUI.click(findTestObject('Page_Home After Login/card_Product_available',[('index'): intindex]))
//CustomKeywords.'com.utilities.dynamicTestObject.testdynamicobject'(xpath)
String intindex = '1'
def xpath = '//div[@id=products]/div[' + intindex + ']'
CustomKeywords.'com.utilities.dynamicTestObject.testdynamicobject'(xpath)

/*
if (intindex.isInteger()) {
    int value = ((intindex) as Integer)

    for (intindex = 1; intindex <= 10; intindex++) {
        
		x = intindex

        y = intindex

        z = intindex

        
		x = findTestObject('Page_Home After Login/card_Product_1')
		y = findTestObject('Page_Bid Product/text_Somethingwentwrong')
		z = findTestObject('Page_Bid Product/button_MenungguResponPenjual')
	
        if (WebUI.verifyElementVisible(findTestObject('Page_Bid Product/button_Bidproduct'))) {
            def xpath = ('//div[@id=products]/div[' + intindex) + ']'
            CustomKeywords.'com.utilities.dynamicTestObject.testdynamicobject'(xpath)
			
        } 
			if (WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Somethingwentwrong'))) {
				WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
			}
			else if (WebUI.verifyElementVisible(findTestObject('Page_Bid Product/button_MenungguResponPenjual'))) {
				WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
			}
		
		else if (y == WebUI.verifyElementVisible(findTestObject('Page_Bid Product/text_Somethingwentwrong'))) {
            WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
        } else if (z == WebUI.verifyElementVisible(findTestObject('Page_Bid Product/button_MenungguResponPenjual'))) {
            WebUI.navigateToUrl('https://secondhand.binaracademy.org/')
        } else {
            WebUI.callTestCase(findTestCase('Pages/Bid Product/Verify Content'), [:], FailureHandling.STOP_ON_FAILURE)
        }
        
    }
}
*/