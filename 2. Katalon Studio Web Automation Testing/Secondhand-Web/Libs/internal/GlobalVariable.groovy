package internal

import com.kms.katalon.core.configuration.RunConfiguration
import com.kms.katalon.core.main.TestCaseMain


/**
 * This class is generated automatically by Katalon Studio and should not be modified or deleted.
 */
public class GlobalVariable {
     
    /**
     * <p></p>
     */
    public static Object weburl
     
    /**
     * <p></p>
     */
    public static Object loginemail
     
    /**
     * <p></p>
     */
    public static Object loginpassword
     
    /**
     * <p></p>
     */
    public static Object invalidemail
     
    /**
     * <p></p>
     */
    public static Object invalidpassword
     

    static {
        try {
            def selectedVariables = TestCaseMain.getGlobalVariables("default")
			selectedVariables += TestCaseMain.getGlobalVariables(RunConfiguration.getExecutionProfile())
            selectedVariables += TestCaseMain.getParsedValues(RunConfiguration.getOverridingParameters(), selectedVariables)
    
            weburl = selectedVariables['weburl']
            loginemail = selectedVariables['loginemail']
            loginpassword = selectedVariables['loginpassword']
            invalidemail = selectedVariables['invalidemail']
            invalidpassword = selectedVariables['invalidpassword']
            
        } catch (Exception e) {
            TestCaseMain.logGlobalVariableError(e)
        }
    }
}
