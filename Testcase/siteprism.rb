class Login < Wordpress::Page
  element :emailusername_field, 'input[name="q"]' 
  element :search_button, '#usernameOrEmail'
  element :button_lanjutkan, '{class="button form-button"}'
end

class Register < Wordpress::Page
  element :email, '#email'
  element :username, '#username'
  element :password, '#password'
  element :button_createYourAccount, '{class="button signup-form__submit"}'
end

def Login
  emailusername_field.set("afif@email.com")
  button_lanjutkan.click
end

def Register
  email.set("afif@gmail.com")
  username.set("afif")
  password.set("afif123")
  button_createYourAccount.click
end