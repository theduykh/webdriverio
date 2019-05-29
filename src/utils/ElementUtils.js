class ElementUtils {

  element(selector, timeout = 30000) {
    browser.$(selector).waitForDisplayed(timeout, false, 'Element not found ' + selector);
    return browser.$(selector);
  }
}

module.exports = new ElementUtils();
