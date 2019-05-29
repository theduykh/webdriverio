import LoginPage from '../pages/Login';
import { expect } from 'chai';

describe('Login', () => {
  it('should login successfully', () => {
    LoginPage.open().login('tomsmith', 'SuperSecretPassword!');
    expect(LoginPage.getMessage()).to.includes('You logged into a secure area!');
    browser.pause(5000);
  });
});
