import ElementUtils from '../utils/ElementUtils'

class Login {
  login(username, password) {
    ElementUtils.element('[name="username"]').setValue(username)
    ElementUtils.element('[name="password"]').setValue(password)
    ElementUtils.element('.login-button').click()
    browser.pause(2133)
  }
}
module.exports = new Login()
