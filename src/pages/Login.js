import ElementUtils from '../utils/ElementUtils';

class Login {

  open() {
    browser.url('login');
    return this;
  }

  login(username, password) {
    ElementUtils.element('[name="username"]').setValue(username);
    ElementUtils.element('[name="password"]').setValue(password);
    ElementUtils.element('button[type="submit"]').click();
  }

  getMessage() {
    return ElementUtils.element('#flash').getText();
  }

}

export default new Login();
